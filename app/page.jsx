"use client";

import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function VortexDemoSecond() {
  const router = useRouter();
  const aboutHandler = async () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Redirecting...',
        success: 'See About Page',
        error: 'Error occurred',
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 5000));
    router.push("/about");
  }

  return (
    (<div
      className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={2500}
        baseHue={180}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-screen h-screen">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button onClick={aboutHandler} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Learn More &rarr;
            </span>
          </button>
        </div>
      </Vortex>
    </div>)
  );
}
