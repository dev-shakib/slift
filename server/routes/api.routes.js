import Router from "koa-router";

const productController = require("../api/product/productController");

export const apiRoutes = new Router().use(
  `/products`,
  productController.routes(),
  productController.allowedMethods()
);
