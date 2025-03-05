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
    <div className="bg-black min-h-screen flex flex-col text-white">
      <Head>
        <title>Cold Email Generator By Alvin</title>
      </Head>

      {/* Centered Container */}
      <div className="flex flex-col justify-center items-center text-center flex-grow px-6 sm:px-10">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="coldem logo"
          width={220}
          height={60}
          className="object-contain"
        />

        {/* Animated Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 text-shadow-xl">
          <BlurText
            text="Free Cold Email Generator"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-white"
          />
        </h2>

        {/* Animated Subtext */}
        <p className="text-lg sm:text-xl font-semibold opacity-90 mt-6 max-w-[90%] md:max-w-[60%]">
          <DecryptedText
            text="Create personalized cold emails quickly and effectively with this free AI-powered cold email generator."
            animateOn="view"
            speed={120} // Slower for a smooth reveal
            revealDirection="right"
            sequential={true}
          />
        </p>

        {/* CTA Button */}
        <StarBorder
          as="button"
          className="mt-10 px-8 py-4  text-white font-semibold text-lg rounded-lg shadow-lg  transition-transform duration-300"
          color="white"
          speed="10s"
          onClick={handleNavigate}
        >
          Try It For Free
        </StarBorder>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-auto opacity-90">
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
