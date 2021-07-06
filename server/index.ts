import next from 'next';
import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa-cors';

// import connectToDatabase from './database';
// import PostListModel from './models/PostListModel';

const port = parseInt(process.env.PORT || '3000', 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  router.get('/api/postlist', ctx => {
    // ctx.body = await PostListModel.find().sort({ createdAt: -1 });
    ctx.body = [
      {
        url: '/posts/schema-graphql-typescript',
        title: 'schema-graphql-typescript',
        description: 'schema-graphql-typescript',
        active: true,
      },
    ];
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
    // try {
    //   const info = await connectToDatabase();
    //   // @ts-ignore
    //   console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    // } catch (error) {
    //   console.error('Unable to connect to database');
    //   process.exit(1);
    // }
    console.log(`>>> Ready on http://localhost:${port}`);
  });
});
