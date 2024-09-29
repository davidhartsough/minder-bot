import { NextRequest, NextResponse } from "next/server";
// import { RESTPostAPI } from 'discord-api-types/v10';

type Channel = {
  id: string;
  type: number; // 1 = DM
};
type User = {
  id: string;
  username: string;
  bot?: boolean;
  email?: string;
};
type InteractionData = {
  // Placeholder
  id: string; // NOT ACCURATE
};
type Interaction = {
  id: string;
  application_id: string;
  type: 1 | 2 | 3 | 4 | 5;
  data?: InteractionData;
  channel: Channel;
  channel_id: string;
  user: User;
  token: string;
};
/*
Interaction Types: 
1 = PING
2 = APPLICATION_COMMAND
3 = MESSAGE_COMPONENT
4 = APPLICATION_COMMAND_AUTOCOMPLETE
5 = MODAL_SUBMIT
*/

export async function POST(request: NextRequest) {
  const interaction = (await request.json()) as Interaction;
  console.log("interaction:", interaction);
  // Handle PING
  if (interaction.type === 1) {
    return NextResponse.json({ type: 1 }, { status: 200, statusText: "OK" });
  }
  // TODO: handle interactions
  return NextResponse.json(
    { ok: true, message: "discord webhook" },
    { status: 200, statusText: "OK" }
  );
}
