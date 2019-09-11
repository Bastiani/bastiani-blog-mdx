import next from 'next';
import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa-cors';

const port = parseInt(process.env.PORT || '3000', 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/', async ctx => {
    ctx.body = { title: 'teste' };
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(cors());

  server.use(router.routes()).use(router.allowedMethods());

  server.listen(port, async () => {
    console.log(`>>> Ready on http://localhost:${port}`);
  });
});
