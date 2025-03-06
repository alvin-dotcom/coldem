"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import BlurText from "@/app/BlurText";
import DecryptedText from "@/app/DecryptedText";
import StarBorder from "./StarBorder";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/generate");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white px-4 sm:px-8">
      <Head>
        <title>Cold Email Generator By Alvin</title>
      </Head>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center flex-grow w-full max-w-4xl">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="coldem logo"
          width={200}
          height={50}
          className="object-contain"
        />

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-6">
          <BlurText
            text="Free Cold Email Generator"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-white"
          />
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl font-semibold opacity-90 mt-4 sm:mt-6 max-w-md sm:max-w-lg">
          <DecryptedText
            text="Create personalized cold emails quickly and effectively with this free AI-powered cold email generator."
            animateOn="view"
            speed={120}
            revealDirection="right"
            sequential={true}
          />
        </p>

        {/* CTA Button */}
        <StarBorder
          as="button"
          className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform duration-300"
          color="white"
          speed="10s"
          onClick={handleNavigate}
        >
          Try It For Free
        </StarBorder>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 w-full opacity-90 text-sm sm:text-base">
        <p className="font-medium">
          Made with ❤️‍🔥 by{" "}
          <a
            href="https://github.com/alvin-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-500 transition-all"
          >
            Alvin
          </a>
        </p>
      </footer>
    </div>
  );
}
