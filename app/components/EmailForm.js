import { useState } from "react";

export default function EmailForm({ summary, emails, setEmails, handleSend, loadingSend }) {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      setCsvFile(file);
    } else {
      alert("Please upload a valid CSV file.");
      e.target.value = null;
    }
  };

  const handleSendClick = async () => {
    let recipients = [];

    if (csvFile) {
      const text = await csvFile.text();
      recipients = text
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line);
    } else if (emails) {
      recipients = emails.split(",").map(email => email.trim());
    } else {
      alert("Please enter emails or upload a CSV file!");
      return;
    }

    handleSend(recipients);
  };

  return (
    <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4 flex-1">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Send Summary via Email</h2>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recipient Emails:</label>
        <input
          type="text"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 transition"
          placeholder="example1@gmail.com, example2@gmail.com"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Or upload CSV file:</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100 transition cursor-pointer"
        />
        {csvFile && (
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Selected file: <span className="font-medium">{csvFile.name}</span>
          </p>
        )}
      </div>

      <button
        onClick={handleSendClick}
        disabled={loadingSend}
        className={`w-full py-3 mt-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center ${
          loadingSend ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loadingSend ? "Sending..." : "Send Summary"}
      </button>
    </div>
  );
}
