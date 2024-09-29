import { NextRequest, NextResponse } from "next/server";

type User = {
  id: number;
  is_bot: boolean;
  first_name: string;
  username?: string;
};
type Chat = {
  id: number;
  type: string;
};
type Message = {
  message_id: number;
  from: User;
  chat: Chat;
  text: string;
};

export async function POST(request: NextRequest) {
  const update = await request.json();
  console.log("update:", update);
  if (update.message) {
    const { message_id, from, chat, text } = update.message as Message;
    console.log({
      messageId: message_id,
      userId: from.id,
      chatId: chat.id,
      username: from.username,
      userFirstName: from.first_name,
      text,
    });
    // TODO: https://api.telegram.org/bot<token>/sendMessage
    // OR resp: { method: "sendMessage", chat_id: "", text: "" }
  }
  return NextResponse.json(
    { ok: true, message: "telegram webhook" },
    { status: 200, statusText: "OK" }
  );
}
