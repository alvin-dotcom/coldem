'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/generate');
  };

  return (
    <div className="bg-gradient-to-r bg-blue-500 min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center text-center flex-grow px-4 md:px-0">
        <Image
          src="/logo.png"
          alt="coldem logo"
          width={220}
          height={60}
          className="object-contain"
        />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 text-shadow-xl">
          Free Cold Email Generator
        </h2>
        <p className="text-white text-lg sm:text-xl font-semibold md:text-xl mt-2 opacity-90">
          Create personalized cold emails quickly and effectively with this free AI-powered cold email generator.
        </p>
        <button
          onClick={handleNavigate}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold text-lg rounded-md shadow-xl hover:bg-pink-500 transform hover:scale-105 transition-all duration-300"
        >
          Try It For Free
        </button>
      </div>
      
      <footer className="text-white text-center py-6 mt-auto bg-blue-500 opacity-90">
        <p className="font-medium">
          Made with ❤️‍🔥 by{' '}
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
