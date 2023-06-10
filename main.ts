import "https://deno.land/std@0.177.1/dotenv/load.ts";
import { } from "./src/ws_server.ts";
import { } from "./src/api/order.place.js";

const log = console.log,
  apiKey = Deno.env.get('TESTNET_APIKEY'),
  secretKey = Deno.env.get('TESTNET_SECRET');