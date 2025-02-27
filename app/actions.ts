"use server";

export async function getData(formData: FormData) {
  const apiKey = "YOUR_AP_KEY"; // <----- ENTER YOUR API KEY
  /* 
    This is just a demo
    Remember, never commit your API key here as is
   */

  if (!apiKey) {
    throw new Error("API key not configured");
  }

  try {
    const response = await fetch("https://api.venice.ai/api/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
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
