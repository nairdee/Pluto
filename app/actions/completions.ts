"use server";

import OpenAI from "openai";
import { venice } from "../lib/utils";

export async function getData(formData: FormData) {
  if (!venice.apiKey) {
    throw new Error("API key not configured");
  }

  const openai = new OpenAI({
    apiKey: venice.apiKey,
    baseURL: venice.baseUrl,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: "dolphin-2.9.2-qwen2-72b",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "What is the capital of France?" },
      ],
    });

    return completion.choices[0].message;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
