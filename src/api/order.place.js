import { load } from "https://deno.land/std@0.177.1/dotenv/load.ts";
const log = console.log,
  apiKey = Deno.env.get("TESTNET_APIKEY"),
  secretKey = Deno.env.get("TESTNET_SECRET");

// const id = crypto.randomUUID();
// const method = "order.place";
// const symbol = "BTCUSDT"; // exchange.info
// const side = "SELL"; // ["SELL", "BUY"]
// const type = "LIMIT"; // ["LIMIT", "MARKET", ...]
// const timeInForce = "GTC"; // ["GTC","FOK",...args]
// const price = 20000.00; // order.book
// const quantity = 0.01; // min notional from exchange.info
// // const apiKey = Deno.env.get("TESTNET_APIKEY");
// const timestamp = Date.now();
// const signature = "";

/**
 * if type is LIMIT then these params are required: timeInForce, price, quantity.
 */
const order = {
  id = Crypto.randomUUID();
  method = "order.place",
  params = {
    symbol: "BTCUSDT", // exchange.info
    side: "SELL", // ["SELL", "BUY"]
    type: "LIMIT", // ["LIMIT", "MARKET", ...]
    timeInForce: "GTC", // ["GTC","FOK",...args]
    price: 20000.00, // order.book
    quantity: 0.01, // min notional from exchange.info
    apiKey: Deno.env.get("TESTNET_APIKEY"),
    timestamp: Date.now(),
  },
  sign() {
    sig = await window.crypto.subtle.sign(
      "HMAC",
      secretKey,
      params,
    );
    this.params.signature = sig;
    // return sig;
  }
}

const orderParams = {
  symbol: "BTCUSDT", // exchange.info
  side: "SELL", // ["SELL", "BUY"]
  type: "LIMIT", // ["LIMIT", "MARKET", ...]
  timeInForce: "GTC", // ["GTC","FOK",...args]
  price: 20000.00, // order.book
  quantity: 0.01, // min notional from exchange.info
  apiKey: Deno.env.get("TESTNET_APIKEY"),
  timestamp: Date.now(),
};

class placeNewOrder {
  #id;
  #method;
  constructor() {
  this.#id = Crypto.randomUUID(),
  this.#method = "order.place";
  this.params = orderParams;
  }
  async sign() {
    sig = await window.crypto.subtle.sign(
      "HMAC",
      secretKey,
      this.params,
    );
    this.params.signature = sig;
    // return sig;
  }
}

class newOrder {
  #id; timeInForce = "GTC"; quantity = 0.01; 
  constructor( symbol, side, type, quantity) {
    this.#id = uuId();
      this.method = "order.place",
      this.params = {
        symbol: symbol,
        side: side,
        type: type,
        timeInForce: timeInForce,
        price: 0,
        quantity: quantity,
        apiKey: api(),
        timestamp: time(),
      };
  }
  time() {
    return Date.now();
  }
  uuId() {
    // Crypto.getRandomValues(); // Fills the passed TypedArray with cryptographically sound random values.
    return Crypto.randomUUID(); // Returns a randomly generated, 36 character long v4 UUID.
  }
  api() {
    return Deno.env.get("TESTNET_APIKEY");
  }
  async sign() {
    sig = await window.crypto.subtle.sign(
      "HMAC",
      this.secretKey,
      this.params,
    );
    this.params.signature = sig;
    // return sig;
  }
  verify(encoded) {
    crypto.subtle.verify(
      "HMAC",
      secretKey,
      this.signature,
      encoded,
    );
  }
  // async price(symbol) {
  //   await fetch("https://api.binance.com", reqInit);
  // }
}

export { newOrder, placeNewOrder, orderParams, order };
