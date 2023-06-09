/** 
 * @file ws_server.ts 
 * @fileoverview A websocket server, also manages state.
 * https://medium.com/deno-the-complete-reference/deno-websocket-server-in-oak-9fbb36f65f04
 * @todo - fix fmt rules
 *       - import maps
 *       - client.ts
 *       - broadcast api
 *       - state: jotai? useState?
 *       - charts
 *       - data store using github flat data   
 *       - PWA
 *       - cache w/ service worker
 *       - worker.js 
 */

import {
  Application,
  Context,
  Router,
  Status,
} from "https://deno.land/x/oak@v12.2.0/mod.ts";


const app = new Application(); // options: { logErrors: false }
const log = console.log;
const controller = new AbortController();
const { signal } = controller;

/**
 * @function Router
 * 
 */
const router = new Router();

router
  .get("/", (context) => {
    context.response.body = homePage;
  })

  /**
   * @function close
   * @
   * @param { Context } context
   * @description Visiting this endpoint will cause the application
   * to stop listening and stop processing requests. 
   */
  .get("/close", (context) => {
    context.response.body = "Closing Application";
    controller.abort();
  })

  /**
   * @route 
   * @param { Context } context
   */
  .get("/wss", (context) => {
    if (!context.isUpgradable)
    {
      context.throw(501);
    }

    const ws = context.upgrade();

    ws.onopen = () => {
      log("Connected to client");
      ws.send("Hello from server!");
    };

    ws.onmessage = (m) => {
      log("Got message from client: ", m.data);
      ws.send(m.data as string);
      // ws.close();
    };

    ws.onclose = () => log("Disconncted from client");
  });

app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound); // A basic 404 page


/**
 * @listens port<8000>
 * @listens signal<AbortSignal>
 */
app.listen({ port: 8000, signal });
log("listening at http://localhost:8000");


const homePage = `<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
    <script src="https://cdn.lr-ingest.com/LogRocket.min.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Home</h1>
    <div id="wss"></div>
    <script>
      window.LogRocket && window.LogRocket.init('dsxa5g/deno-servers');
      const ws = new WebSocket("ws://localhost:8000/wss");
      ws.onopen = () => console.log("Connected to server");
      ws.onmessage = (m) => {
        console.log("Got message from server: ", m.data);
        ws.send("Some message ${crypto.randomUUID()}");
      };
      ws.onclose = () => console.log("Disconnected from server");
    </script>
  </body>
</html>`;


/**
 * @function notFound
 * @param { Conrext } context
 */
function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
}
