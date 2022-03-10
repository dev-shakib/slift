import { Heading, Page } from '@shopify/polaris';

const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');

const app = new Koa();
const router = new KoaRouter();

// Json prettier middle ware
app.use(json());

// Simple middleware
app.use(async (ctx) => (ctx.body = { msg: 'Hello World' }));

const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
  </Page>
);

export default Index;
