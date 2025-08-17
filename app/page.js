'use client'

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // <-- import Toastify
import TranscriptInput from "./components/TranscriptInput";
import PromptInput from "./components/PromptInput";
import SummaryEditor from "./components/SummaryEditor";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import { generateSummary, sendSummary } from "./lib/api";

export default function Home() {
  const defaultPrompt =
    "Summarize in numbered bullet points, highlight key decisions, and list action items with responsible persons but not in tabular format, something like <Task> : <To Whom>.";

  const [transcript, setTranscript] = useState("");
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [summary, setSummary] = useState("");
  const [emails, setEmails] = useState("");

  const [loadingGenerate, setLoadingGenerate] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);

  const handleGenerate = async () => {
    if (!prompt || (!transcript && !file)) {
      toast.error("Please enter transcript or upload a file, and enter a prompt!");
      return;
    }

    setLoadingGenerate(true);
    try {
      const generatedSummary = await generateSummary(transcript, prompt, file);
      setSummary(generatedSummary);
      toast.success("Summary generated successfully!");
    } catch (error) {
      toast.error("Failed to generate summary. Check console for details.");
      console.error(error);
    }
    setLoadingGenerate(false);
  };

  const handleSend = async (recipients = null) => {
    if (!summary) {
      toast.error("Please generate the summary first!");
      return;
    }

    const finalRecipients = recipients ?? emails.split(",").map(email => email.trim());

    if (finalRecipients.length === 0) {
      toast.error("Please enter recipient emails or upload a CSV file!");
      return;
    }

    setLoadingSend(true);
    try {
      await sendSummary(summary, finalRecipients);
      toast.success("Summary sent successfully!");
    } catch (error) {
      toast.error("Failed to send summary. Check console for details.");
      console.error(error);
    }
    setLoadingSend(false);
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">AI Meeting Notes Summarizer</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Inputs */}
          <div className="flex-1 space-y-4">
            <TranscriptInput
              transcript={transcript}
              setTranscript={setTranscript}
              file={file}
              setFile={setFile}
            />

            <div className="flex flex-col space-y-2">
              <PromptInput prompt={prompt} setPrompt={setPrompt} />

              <button
                onClick={handleGenerate}
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                disabled={loadingGenerate}
              >
                {loadingGenerate ? "Generating..." : "Generate Summary"}
              </button>
            </div>
          </div>

          {/* Right Column: Output & Email */}
          <div className="flex-1 space-y-4">
            <SummaryEditor summary={summary} setSummary={setSummary} />

            <EmailForm
              summary={summary}
              emails={emails}
              setEmails={setEmails}
              handleSend={handleSend}
              loadingSend={loadingSend}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
