"use client";

import { Vortex } from "@/components/ui/vortex";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function UserManual() {
    const router = useRouter();

    const mailListHandler = async () => {
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
                loading: 'Redirecting...',
                success: 'Join Waiting List',
                error: 'Error occurred',
            }
        );
        await new Promise((resolve) => setTimeout(resolve, 5000));
        router.push("/waitlist");
    }


    const steps = [
        {
            number: 1,
            title: "Create Your Account",
            description:
                "Sign up to start your Web3 learning journey. Your Meta Account will be automatically created.",
        },
        {
            number: 2,
            title: "Practice with Web3 Tools",
            description:
                "Use Web3 VMs and CLI tools, interactive lessons and tutorials to understand blockchain, smart contracts, and dApps to gain hands-on experience in a simulated environment.",
        },
        {
            number: 3,
            title: "Track and Share Progress",
            description:
                "Monitor your achievements and share certifications with the Web3 community.",
        },
    ];

    return (
        <>
            <Head>
                <title>User Manual</title>
                <meta name="description" content="Quick guide to learning Web3 with our app." />
            </Head>
            <div className="relative w-screen h-screen overflow-x-hidden bg-black">
                {/* Vortex Background */}
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={2500}
                    baseHue={180}
                    className="absolute inset-0 z-0"
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 z-10" />

                    {/* Main Content */}
                    <div className="relative z-50 flex flex-col items-center justify-start min-h-screen px-4 md:px-10 pt-10">
                        <header className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
                            User Manual
                        </header>
                        <section className="w-full max-w-4xl grid grid-cols-1 gap-6">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="flex flex-col p-6 bg-gray-900/60 border border-gray-700 rounded-lg hover:bg-gray-700/70 transition-all"
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-lg">
                                            {step.number}
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-100">{step.title}</h2>
                                    </div>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                            ))}
                        </section>
                        <button onClick={mailListHandler} className="relative z-50 inline-flex h-12 overflow-hidden mt-8 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Join Waitlist &rarr;
                            </span>
                        </button>
                    </div>
                </Vortex>
            </div>
        </>
    );
}
