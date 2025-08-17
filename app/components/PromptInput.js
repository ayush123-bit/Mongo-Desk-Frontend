export default function PromptInput({ prompt, setPrompt }) {
  // Default text if prompt is empty
  const defaultPrompt =
    "Summarize in bullet points, highlight key decisions, and list action items with responsible persons.";

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Custom Prompt / Instruction:
      </label>
      <input
        type="text"
        value={prompt || defaultPrompt} // Use default if prompt is empty
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition"
        placeholder="E.g., Summarize in bullet points or highlight action items..."
      />
    </div>
  );
}
