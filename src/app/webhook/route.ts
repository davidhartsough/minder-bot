const verifyToken = process.env.VERIFY_TOKEN;

export function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  if (mode && token) {
    console.log("mode:", mode);
    console.log("token:", token);
    console.log("challenge:", challenge);
    if (mode === "subscribe" && token === verifyToken) {
      return new Response(challenge, { status: 200 });
    } else {
      return new Response("Forbidden", { status: 403 });
    }
  }
  return new Response("Bad Request", { status: 400 });
}

type Message = {
  message?: string;
  sender?: { id: string };
};

export async function POST(request: Request) {
  const body = await request.json();
  if (body.object === "page") {
    body.entry.forEach(({ messaging }: { messaging: Message[] }) => {
      console.log("messaging:", messaging);
      console.log("Webhook Event:", messaging[0]);
    });
  }
  return new Response("OK", { status: 200 });
}
