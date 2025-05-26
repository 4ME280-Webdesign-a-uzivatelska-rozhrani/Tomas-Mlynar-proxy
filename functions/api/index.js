export async function onRequest(context) {
  const BIN_ID = "683040d48a456b7966a44a27";
  const API_KEY = context.env.X_MASTER_KEY;
  const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  const { request } = context;
  const method = request.method;

  const headers = {
    "Content-Type": "application/json",
    "X-Master-Key": API_KEY
  };

  if (method === "GET") {
    return fetch(BIN_URL, { headers });
  }

  if (method === "PUT") {
    const body = await request.text();
    return fetch(BIN_URL, {
      method: "PUT",
      headers,
      body
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
}
