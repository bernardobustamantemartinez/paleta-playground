"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Explore different AI Models in one place.</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Image Generation.",
                "Video Generation.",
                "Music Generation",
                "Code Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-lgiht text-zinc-400">
        Create content 10x faster using AI.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-small">
        No credit card required.
      </div>
    </div>
  );
};
