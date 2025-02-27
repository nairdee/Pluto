// this assumes your variables are defined in .env or .env.local
// Keep in mind these variables will only work in server components or actions.
// This is intentionall. For usage in client see: https://api.venice.ai/api/v1
// We highly recommend following the server side approach for security reasons.

export const venice = {
  apiKey: process.env.VENICE_API_KEY,
  baseUrl: process.env.VENICE_API_BASE_URL,
};
