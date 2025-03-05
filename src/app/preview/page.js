'use client';

import { useSearchParams } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, Suspense } from "react";
import StarBorder from "../StarBorder";

function PreviewContent() {
  const searchParams = useSearchParams();
  const [recipientEmail, setRecipientEmail] = useState("");
  const formData = {};

  searchParams.forEach((value, key) => {
    formData[key] = value;
  });

  const emailTemplate = `Dear ${formData.recipientName},

I hope this message finds you well. My name is ${formData.name}, and I am a ${formData.proficiency} with ${formData.experience} years of experience in ${formData.opportunity}. I am reaching out to inquire if you might assist me with a referral for opportunities that align with my background.

You can review my work and projects on my GitHub profile: ${formData.github}

I am currently seeking ${formData.opportunityType} positions in ${formData.opportunity}, and I believe my skills and passion for ${formData.proficiency} would enable me to contribute effectively to any team.

Thank you for your time and consideration.

Best regards,
${formData.name}

Job Link: ${formData.jobLink}

Resume: ${formData.resumeLink}

LinkedIn: ${formData.linkedin}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate).then(() => {
      toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme:"dark"
      });
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme:"dark"
      });
    });
  };

  const handleSendEmail = () => {
    if (!recipientEmail) {
      toast.error("Please enter a recipient email.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme:"dark"
      });
      return;
    }
    const mailtoLink = `mailto:${recipientEmail}?subject=Referral Request for ${formData.opportunity}&body=${encodeURIComponent(emailTemplate)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black text-white p-8 shadow-xl rounded-lg w-full max-w-2xl mx-auto flex flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-6 text-center">Generated Email:</h2>
      
      <textarea
        className="w-full h-60 p-4 border-2 border-white rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 ease-in-out"
        value={emailTemplate}
        readOnly
      />
      
      <input
        type="email"
        className="w-full p-3 mt-4 border-2 border-white rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 ease-in-out"
        placeholder="Enter recipient email"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
      />
      
      <div className="flex justify-between gap-3 mt-6 w-full">
        <StarBorder
          className="w-1/2 text-center bg-gradient-to-r text-white py-3 px-4 rounded-full font-semibold shadow-lg transform transition-all duration-300 ease-in-out"
          onClick={handleCopy}
        >
          Copy Email
        </StarBorder>
        <StarBorder
          className="w-1/2 text-center bg-gradient-to-r text-white py-3 px-4 rounded-full font-semibold shadow-lg transform transition-all duration-300 ease-in-out"
          onClick={handleSendEmail}
        >
          Send Email
        </StarBorder>
      </div>

      <ToastContainer />
    </div>
  );
}

export default function Preview() {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-2 overflow-hidden">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg">
        Preview Your Cold Mail
      </h1>
      <Suspense fallback={<div className="text-white text-lg">Loading...</div>}>
        <PreviewContent />
      </Suspense>
    </div>
  );
}
