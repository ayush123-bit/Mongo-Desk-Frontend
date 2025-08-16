export default function TranscriptInput({ transcript, setTranscript, file, setFile }) {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setTranscript(""); // Clear textarea if a file is uploaded
  };

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-full md:max-w-2xl mx-auto">
      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Transcript:
      </label>

      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows={8}
        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white dark:focus:bg-gray-600 resize-none text-gray-800 dark:text-gray-100 mb-3 transition"
        placeholder="Paste your meeting transcript here..."
      />

      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Or upload a text file:
      </label>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer transition"
      />

      {file && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Selected file: <span className="font-medium">{file.name}</span>
        </p>
      )}
    </div>
  );
}
