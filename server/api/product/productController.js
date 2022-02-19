import Router from "koa-router";
import Shopify from "@shopify/shopify-api";
import storage from "node-persist";
import { getBulkProduct } from "../../handlers";

const router = new Router();

router.get("/", async (ctx, next) => {
  try {
    let { shop } = ctx.query;

    if (!shop) {
      throw new Error(`Store is missing!`);
    }

    await storage.init();

    const accessToken = await storage.getItem(`${shop}_accessToken`);

    const data = await getBulkProduct(shop, accessToken);

    ctx.body = data;
    ctx.status = 200;
  } catch (err) {
    throw new Error(err.message);
  }
});

module.exports = router;
