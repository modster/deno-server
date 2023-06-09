



let uuid = self.crypto.randomUUID();


// The base endpoint is: wss://stream.binance.com:9443 or wss://stream.binance.com:443
// Streams can be accessed either in a single raw stream or in a combined stream.
// Users can listen to multiple streams.
// Raw streams are accessed at /ws/<streamName>
// Combined streams are accessed at /stream?streams=<streamName1>/<streamName2>/<streamName3></streamName3>


/**
 * @name rawTradeStream
 * @host wss://stream.binance.com:9443/ws/<symbol>@trade
 * @description 
 * - This stream pushes raw trade information. 
 * - Each trade has a unique buyer and seller.
 * - Update speed is real-time.
 */
async function rawTradeStream ( symbol ) {
  
  
  socket.send(`wss://stream.binance.com:9443/ws/${symbol}@trade`);
}
/** @returns  {
  "e": "trade",     // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "t": 12345,       // Trade ID
  "p": "0.001",     // Price
  "q": "100",       // Quantity
  "b": 88,          // Buyer order ID
  "a": 50,          // Seller order ID
  "T": 123456785,   // Trade time
  "m": true,        // Is the buyer the market maker?
  "M": true         // Ignore
}
*/