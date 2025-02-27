"use client";
import { getData } from "../actions/models";

export default function FetchForm() {
  async function handleSubmit(formData: FormData) {
    try {
      // This will trigger the server action
      const response = await getData(formData);

      // Update UI with response
      const resultElement = document.getElementById("result");
      if (resultElement) {
        resultElement.textContent = JSON.stringify(response, null, 2);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="space-y-4">
      <form action={handleSubmit} className="flex gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Fetch Models
        </button>
      </form>

      <pre
        id="result"
        className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap"
      >
        Click button to fetch data...
      </pre>
    </div>
  );
}
