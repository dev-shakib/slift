import Router from "koa-router";
import config from "config";
import { apiRoutes } from "./api.routes";

const storage = require("node-persist");

const { port, root } = config.get("api");

export const appRoutes = new Router()
  .get(`/ping`, (ctx, next) => {
    ctx.body = {
      message: `pong`,
    };
    ctx.status = 200;
  })
  .use(`${root}`, apiRoutes.routes(), apiRoutes.allowedMethods());
