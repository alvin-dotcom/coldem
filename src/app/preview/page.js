'use client';
import { useSearchParams } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Preview() {
  const searchParams = useSearchParams();
  const formData = {};
  searchParams.forEach((value, key) => {
    formData[key] = value;
  });

  const emailTemplate = `Subject: Referral Request for ${formData.opportunity}

Dear ${formData.recipientName},

I hope this message finds you well. My name is ${formData.name}, and I am a ${formData.proficiency} with ${formData.experience} years of experience in ${formData.opportunity}. I am reaching out to inquire if you might assist me with a referral for opportunities that align with my background.

You can review my work and projects on my GitHub profile: ${formData.github}

I am currently seeking ${formData.opportunityType} positions in ${formData.opportunity}, and I believe my skills and passion for ${formData.proficiency} would enable me to contribute effectively to any team.

Thank you for your time and consideration.

Best regards,
${formData.name}

Job Link: ${formData.jobLink}

Resume: ${formData.resumeLink}

LinkedIn: ${formData.linkedin}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate).then(() => {
      toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-blue-500 flex flex-col items-center py-5 lg:py-14 px-2">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg">Preview Your Cold Mail</h1>
      <div className="bg-white p-12 shadow-xl rounded-lg w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto flex flex-col justify-between">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Generated Email:</h2>
        <textarea
          className="w-full h-72 p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
          value={emailTemplate}
          readOnly
        />
        <div className="flex justify-center mt-6">
          <button
            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={handleCopy}
          >
            Copy Email Template
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
