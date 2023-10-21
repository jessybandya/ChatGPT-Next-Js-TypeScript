import openai from "@lib/chatgpt";
import { NextResponse } from "next/server";

type Option = {
    value: string;
    label: string;
  };
  
  type Data = {
    modelOption: Option[];
  };
// Handles GET requests to /api
export async function GET(request: Request) {
    const models = await openai.listModels().then((res) => res.data.data);

    const modelOption = models.map((model) => ({
      value: model.id,
      label: model.id,
    }));
  // ...
  return NextResponse.json({ modelOption });
}


