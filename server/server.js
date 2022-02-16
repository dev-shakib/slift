import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import next from "next";
import Router from "koa-router";
import { appRoutes } from "./routes";

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const config = require("config");
const logger = require("./utils/logger");
const storage = require("node-persist");
const app = next({
  dev,
});
const handle = app.getRequestHandler();

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\/|\/$/g, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

app.prepare().then(async () => {
  const server = new Koa();

  server.keys = [Shopify.Context.API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      async afterAuth(ctx) {
        // Access token and shop available in ctx.state.shopify
        const { shop, accessToken, scope } = ctx.state.shopify;
        const host = ctx.query.host;

        // Storing the currently active shops in memory will force them to re-login when your server restarts. You should
        // persist this object in your app.
        await storage.init();
        await storage.setItem(`${shop}_accessToken`, accessToken);
        await storage.setItem(`${shop}_shop`, shop);

        const response = await Shopify.Webhooks.Registry.register({
          shop,
          accessToken,
          path: "/webhooks",
          topic: "APP_UNINSTALLED",
          webhookHandler: async (topic, shop, body) => {
            await storage.removeItem(`${shop}_accessToken`);
            await storage.removeItem(`${shop}_shop`);
          },
        });

        if (!response.success) {
          logger.info(
            `Failed to register APP_UNINSTALLED webhook: ${response.result}`
          );
        }

        // Redirect to app with shop parameter upon auth
        ctx.redirect(`/?shop=${shop}&host=${host}`);
      },
    })
  );

  server.use(appRoutes.allowedMethods());
  server.use(appRoutes.routes());
  server.listen(port, () => {
    logger.info(`> Ready on http://localhost:${port}`);
  });
});
