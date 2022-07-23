import Koa from "koa";
import koaBody from "koa-body";
import Router from "koa-router";

const app = new Koa();

app.use(koaBody());

const router = new Router();

router.get("/api/list", async (ctx, next) => {
  const jsonData = (await import("./editorData.json")).default;
  ctx.body = jsonData;
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, "localhost", () => {
  console.log(`Server listening on port 8080`);
});
