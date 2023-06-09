
/**
 * @function handle
 * @param {Deno.Conn } conn 
 */
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn)
  {
    await requestEvent.respondWith(handleReq(requestEvent.request));
  }
}

/**
 * @function handleReq
 * @param { Request } req 
 * @returns {Response} response
 */
function handleReq(req: Request): Response {
  const upgrade = req.headers.get("upgrade") || "";
  if (upgrade.toLowerCase() != "websocket")
  {
    return new Response("request isn't trying to upgrade to websocket.");
  }
  /**
   * @constructor 
   * @returns { socket, response }
   */
  const { socket, response } = Deno.upgradeWebSocket(req);

  /**
   * @event onopen
   */
  socket.onopen = () => {
    /**
 * confirm socket is open 
 */
    console.log("socket opened");
    /**
     * @todo set up cron or interval every 30 minutes
     * confirm socket is open and test connectivity with a ping
     */
    socket.send(JSON.stringify(ping));
  }

  /**
   * @event onmessage
   * @param e 
   */
  socket.onmessage = (e) => {
    console.log(e.data);
    /**
     * @todo if a ping is recieved, send pong
     */
    // if (e.data.method === "ping") {
    // socket.send(JSON.stringify(pong));
    // }
  };

  /**
   * @event onerror
   * @param { Error } e 
   */
  socket.onerror = (e) => console.error("Error: ", e);

  /**
   * @event onclose
   */
  socket.onclose = () => console.log("socket closed");

  /**
   * @returns { Response } response
   */
  return response;
}
