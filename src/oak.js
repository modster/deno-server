import { Application, Router } from "https://deno.land/x/oak@v12.2.0/mod.ts";
const app = new Application({ logErrors: false });
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

router.get("/wss", (ctx) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501);
  }
  const ws = ctx.upgrade();
  // Define ws callbacks
  
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });