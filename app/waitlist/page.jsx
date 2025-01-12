"use client";

import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { joinWaitlist } from "@/actions/joinWaitlist";

export default function VortexDemoSecond() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      const joinWaitlistPromise = joinWaitlist(email);

      await toast.promise(joinWaitlistPromise, {
        loading: "Submitting email...",
        success: () => {
          setEmail("");
          return "Successfully Joined the Waitlist!";
        },
        error: (err) => {
          return err.message || "An error occurred, please try again.";
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-screen mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={2500}
        baseHue={180}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-screen h-screen"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <form
          onSubmit={handleSubmit}
          className="relative z-50 flex flex-col items-center space-y-4"
        >
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[40rem] p-3 rounded-full border border-gray-600 bg-gray-900/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Join Waitlist &rarr;
            </span>
          </button>
        </form>
      </Vortex>
    </div>
  );
}
