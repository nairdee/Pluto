"use server";

import { venice } from "../lib/utils";

export async function getData(formData: FormData) {
  if (!venice.apiKey) {
    throw new Error("API key not configured");
  }

  try {
    const response = await fetch(`${venice.baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${venice.apiKey}`,
      },
      // Next.js won't cache this request
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
