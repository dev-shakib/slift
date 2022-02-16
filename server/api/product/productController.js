import Router from "koa-router";
import Shopify from "@shopify/shopify-api";
import storage from "node-persist";

const router = new Router();

router.get("/", async (ctx, next) => {
  try {
    let { shop } = ctx.query;

    if (!shop) {
      throw new Error(`Store is missing!`);
    }

    await storage.init();

    const accessToken = await storage.getItem(`${shop}_accessToken`);

    const client = new Shopify.Clients.Rest(shop, accessToken);
    const data = await client.get({
      path: "products",
    });

    ctx.body = data;
    ctx.status = 200;
  } catch (err) {
    throw new Error(err.message);
  }
});

module.exports = router;
