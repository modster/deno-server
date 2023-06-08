import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const port = 8000;

async function handler(req: Request): Promise<Response> {

  // console.log("Method:", req.method);

  // const url = new URL(req.url);
  // console.log(url);

  // console.log("Path:", url.pathname);
  // console.log("Query parameters:", url.searchParams);

  // console.log("Headers:", req.headers);

  let body = {};
  if (req.body)
  {
    body = await req.text();//json(); //or req.text();
    console.log(`Body: ${body}`);
  }

  const res = `User-agent:\n\n${req.headers.get("user-agent") ?? ""}`;
  // Method: ${req.method}
  // ${Headers}
  // ${url.searchParams};

  return new Response(res, {
    status: 200,
    // headers: {
    //   "content-type": type,
    // },
  });

}

await serve(handler, { port });
