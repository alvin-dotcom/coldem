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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const normalizeUrl = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const normalizedData = { ...formData };
    ["github", "jobLink", "linkedin", "resumeLink"].forEach((field) => {
      if (normalizedData[field]) {
        normalizedData[field] = normalizeUrl(normalizedData[field]);
      }
    });

    const queryString = new URLSearchParams(normalizedData).toString();
    
    setTimeout(() => {
      router.push(`/preview?${queryString}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-blue-500 flex items-center justify-center px-4">
      <form
        className="rounded-lg p-4 w-full sm:max-w-5xl lg:max-w-6xl flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg">
          Generate Your Cold Mail
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "Recipient Name", name: "recipientName", type: "text" },
            { label: "Your Profession", name: "proficiency", type: "text" },
            { label: "Years of Experience", name: "experience", type: "number" },
            { label: "Your Field", name: "opportunity", type: "text" },
            { label: "GitHub Profile Link", name: "github", type: "text" },
            { label: "Types of Opportunity", name: "opportunityType", type: "text" },
            { label: "Job Link", name: "jobLink", type: "text" },
            { label: "LinkedIn Profile Link", name: "linkedin", type: "text" },
            { label: "Resume Drive Link", name: "resumeLink", type: "text" },
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
          className={`w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out text-lg mt-4 ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:from-pink-500 hover:to-pink-700"
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Generating...
            </div>
          ) : (
            "Generate"
          )}
        </button>
      </form>
    </div>
  );
}
