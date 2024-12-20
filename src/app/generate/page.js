'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Generate() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    recipientName: "",
    proficiency: "",
    experience: "",
    opportunity: "",
    github: "",
    opportunityType: "",
    jobLink: "",
    linkedin: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    router.push(`/preview?${queryString}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-blue-500 flex items-center justify-center px-4">
      <form 
        className="rounded-lg p-4 w-full sm:max-w-5xl lg:max-w-6xl flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg">Generate Your Cold Mail</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[ 
            { label: "Your Name", name: "name", type: "text" },
            { label: "Recipient Name", name: "recipientName", type: "text" },
            { label: "Your Profession", name: "proficiency", type: "text" },
            { label: "Years of Experience", name: "experience", type: "number" },
            { label: "Your Field", name: "opportunity", type: "text" },
            { label: "GitHub Profile Link", name: "github", type: "url" },
            { label: "Types of Opportunity", name: "opportunityType", type: "text" },
            { label: "Job Link", name: "jobLink", type: "url" },
            { label: "LinkedIn Profile Link", name: "linkedin", type: "url" },
            { label: "Resume Drive Link", name: "resumeLink", type: "url" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-white font-medium mb-2" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700 transition duration-300 ease-in-out text-lg mt-4"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
