import Router from "koa-router";
import Shopify from "@shopify/shopify-api";
import storage from "node-persist";

const StoreService = require("../store/StoreService");

const router = new Router();

router.post("/", async (ctx, next) => {
  try {
    let { shop } = ctx.query;

    if (!shop) {
      throw new Error(`Store is missing!`);
    }

    await storage.init();

    const res = await StoreService.add({
      name: "Store",
    });

    ctx.body = res;
    ctx.status = 200;
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
