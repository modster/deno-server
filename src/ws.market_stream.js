// ws.market_stream.js

const params = ["btcusdt@trade", "btcusdt@depth"];

/** 
 * Subscribe to a market data stream
 * Request: {
 *   "method": "SUBSCRIBE",
 *   "params": [
 *    "btcusdt@aggTrade",
 *    "btcusdt@depth"
 *   ],
 *   "id": 1
 * }
 * 
 * Response: {
 *    "result": null,
 *    "id": 1
 * }
 */
// Streams can be accessed either in a single raw stream or in a combined stream.
// The base endpoint is: wss://stream.binance.com:9443
// Raw streams are accessed at /ws/<streamName>

class streamMarketData {
  params = 
  constructor( method,  ) {
    this.method = method, //["SUBSCRIBE", "UNSUBSCRIBE", "LIST_SUBSCRIPTIONS"]
    this.id = id,
  }
  getId = this.id;

  setId: self.crypto.randomUUID()


const subscribe = {
  method: "SUBSCRIBE",
  params: [`${symbol}@aggTrade`,`${symbol}@depth`],
  id: crypto.uuId(),
};

  
  // Request
  const unsubscribe = {
  {
    method: "UNSUBSCRIBE",
    params: 
    id: self.crypto.randomUUID();
  }
  
//   Listing Subscriptions
//   Response
  
//     {
//       "result": [
//         "btcusdt@aggTrade"
//       ],
//       "id": 3
//     }
//   Request
//   {
//   "method": "LIST_SUBSCRIPTIONS",
//   "id": 3
//   }
// }

/**
 *  unsubscribe
 */

/**
 *  list subscriptions
 */



/**
 * Aggregate Trade Streams
 */




/**
 * @name aggregatedTradeStream
 * @host wss://stream.binance.com:9443/ws/<symbol>@trade
 * @description 
 * - This stream pushes raw trade information. 
 * - Each trade has a unique buyer and seller.
 * - Update speed is real-time.
 */
// function aggregatedTradeStream( symblArr ) {
//   symblArr.map(function(){

    
//   })
//   socket.send(`wss://stream.binance.com:9443/stream?streams=${streamName[i]}`)

// }
