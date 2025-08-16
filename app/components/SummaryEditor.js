export default function SummaryEditor({ summary, setSummary }) {
  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-full md:max-w-2xl mx-auto">
      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Generated Summary:
      </label>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        You can edit this summary as well
      </p>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        rows={10}
        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white dark:focus:bg-gray-600 resize-none text-gray-800 dark:text-gray-100 transition"
        placeholder="Generated summary will appear here..."
      />
    </div>
  );
}
