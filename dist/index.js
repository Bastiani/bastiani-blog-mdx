"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_cors_1 = __importDefault(require("koa-cors"));
const port = parseInt(process.env.PORT || '3000', 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev, quiet: true });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = new koa_1.default();
    const router = new koa_router_1.default();
    router.get('/', async (ctx) => {
        ctx.body = { title: 'teste' };
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });
    router.get('*', async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });
    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200;
        await next();
    });
    server.use(koa_cors_1.default());
    server.use(router.routes()).use(router.allowedMethods());
    server.listen(port, async () => {
        console.log(`>>> Ready on http://localhost:${port}`);
    });
});
