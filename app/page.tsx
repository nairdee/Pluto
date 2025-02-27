import { getData } from "./actions";
import FetchForm from "./components/FetchForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Venice API Demo</h1>
        <p className="text-md font-mono mb-4">
          Navigate to app/actions and add your api key
        </p>
        <FetchForm />
      </div>
    </main>
  );
}
