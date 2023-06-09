/**
 * @fileoverview
 */

const index = `<!DOCTYPE html>
<html>
  <head>
    <title>test</title>
    <script src="https://cdn.lr-ingest.com/LogRocket.min.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>test</h1>
    <div id="wss"></div>
    <script>
      window.LogRocket && window.LogRocket.init('dsxa5g/deno-servers');
    </script>
  </body>
</html>`;

const wsClient = `<!DOCTYPE html>
<html>
  <head><title>wsClient</title></head>
  <body>
    <h1>wsClient</h1>
    <div id="wss"></div>
    <script src="./client.js"></script>
  </body>
</html>`;


export { index, wsClient };
