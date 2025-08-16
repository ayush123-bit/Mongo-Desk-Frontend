'use client'

import { useState } from "react";
import TranscriptInput from "./components/TranscriptInput";
import PromptInput from "./components/PromptInput";
import SummaryEditor from "./components/SummaryEditor";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import { generateSummary, sendSummary } from "./lib/api";

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  const [emails, setEmails] = useState("");

  const [loadingGenerate, setLoadingGenerate] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);

  const handleGenerate = async () => {
    if (!prompt || (!transcript && !file)) {
      alert("Please enter transcript or upload a file, and enter a prompt!");
      return;
    }

    setLoadingGenerate(true);
    try {
      const generatedSummary = await generateSummary(transcript, prompt, file);
      setSummary(generatedSummary);
    } catch (error) {
      alert("Failed to generate summary. Check console for details.");
      console.error(error);
    }
    setLoadingGenerate(false);
  };

  const handleSend = async (recipients = null) => {
    if (!summary) {
      alert("Please generate the summary first!");
      return;
    }

    const finalRecipients = recipients ?? emails.split(",").map(email => email.trim());

    if (finalRecipients.length === 0) {
      alert("Please enter recipient emails or upload a CSV file!");
      return;
    }

    setLoadingSend(true);
    try {
      await sendSummary(summary, finalRecipients);
      alert("Summary sent successfully!");
    } catch (error) {
      alert("Failed to send summary. Check console for details.");
      console.error(error);
    }
    setLoadingSend(false);
  };

  return (
   <>
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Meeting Notes Summarizer</h1>

      {/* Flex container */}
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
    <PromptInput
      prompt={prompt}
      setPrompt={setPrompt}
    />

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
          <SummaryEditor
            summary={summary}
            setSummary={setSummary}
          />

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
     <Footer  />
   </>
  );
}
