import axios from "axios";

const API_BASE_URL = "https://mango-desk-backend.onrender.com/api";

export const generateSummary = async (transcript, prompt, file = null) => {
  try {
    let res;

    if (file) {
      const formData = new FormData();
      formData.append("prompt", prompt);
      formData.append("transcriptFile", file);

      res = await axios.post(`${API_BASE_URL}/summary/generate`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      res = await axios.post(
        `${API_BASE_URL}/summary/generate`,
        { transcript, prompt },
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return res.data.summary;
  } catch (error) {
    console.error(
      "Error generating summary:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const sendSummary = async (summary, recipients) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/email/send`, {
      summary,
      recipients,
    });
    return res.data.message;
  } catch (error) {
    console.error(
      "Error sending summary:",
      error.response?.data || error.message
    );
    throw error;
  }
};
