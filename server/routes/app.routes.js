import Router from "koa-router";
import { apiRoutes } from "./api.routes";

const config = require("config");
const storage = require("node-persist");

const { port, root } = config.get("api");

export const appRoutes = new Router()
  .get(`/ping`, (ctx, next) => {
    ctx.body = {
      message: "pong",
    };
    ctx.status = 200;
  })
  .use(`${root}`, apiRoutes.routes(), apiRoutes.allowedMethods())
  .get(`(.*)`, async (ctx) => {
    const shop = ctx.query.shop;

    await storage.init();

    const accessToken = await storage.getItem(`${shop}_access_token`);

    // This shop hasn't been seen yet, go through OAuth to create a session
    if (!!accessToken) {
      ctx.respond = false;
      ctx.res.statusCode = 200;
    } else {
      ctx.redirect(`/auth?shop=${shop}`);
    }
  });
