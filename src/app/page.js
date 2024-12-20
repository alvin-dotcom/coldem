'use client'
import { useRouter } from "next/navigation";
import Image from "next/image"; 

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/generate");
  };

  return (
    <div className="bg-gradient-to-r bg-blue-500 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-transparent">
        <div className="container mx-auto px-6 py-6 flex justify-center items-center">
          {/* Logo */}
          <Image
            src="/logo.png" 
            alt="coldem logo"
            width={180} 
            height={40} 
            className="object-contain"
          />
        </div>
      </nav>
      <div className="flex flex-grow flex-col justify-center items-center text-center px-4 md:px-0">
        <header>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-shadow-xl">
            Free Cold Email Generator
          </h2>
          <p className="text-white text-lg sm:text-xl font-semibold md:text-xl mb-6 opacity-90">
            Create personalized cold emails quickly and effectively with this free LinkedIn-powered cold email generator.
          </p>
        </header>
        <button
          onClick={handleNavigate}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold text-lg rounded-md shadow-xl hover:bg-pink-500 transform hover:scale-105 transition-all duration-300"
        >
          Try It For Free
        </button>
      </div>
      <footer className="text-white text-center py-6 mt-auto bg-blue-500 opacity-90">
        <p className="font-medium">
          Made with ❤️‍🔥 by{" "}
          <a 
            href="https://github.com/alvin-dotcom"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-500 transition-all"
          >
            Alvin
          </a>
        </p>
      </footer>
    </div>
  );
}
