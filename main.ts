import "https://deno.land/std@0.177.1/dotenv/load.ts";
const log = console.log;
const SECRET = Deno.env.get("TESTNET_SECRET");
const APIKEY = Deno.env.get("TESTNET_APIKEY");


export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main)
{
  console.log("Add 2 + 3 =", add(2, 3));
}
