"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function VortexDemoSecond() {
    const router = useRouter();
    const servicesHandler = async () => {
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
                loading: 'Fetching Services',
                success: 'See Our Services',
                error: 'Error occurred',
            }
        );
        await new Promise((resolve) => setTimeout(resolve, 5000));
        router.push("/services");
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
                <div className="absolute inset-0 bg-black/60 z-10" />
                <h1 className="text-4xl mb-8 underline font-extrabold z-50">Our Services</h1>

                <TextAnimate className="sm:text-3xl text-xl font-bold sm:px-20 z-50 text-center text-gray-300 leading-loose" animation="slideUp" by="word">
                    Welcome to XLearnIon, a revolutionary dApp designed to immerse you in the world of Web3. Built using Xion, our platform empowers users to explore and master Web3 concepts in a true decentralized environment. With interactive Web3 VMs and CLI tools, we bridge the gap between learning and hands-on experience, enabling you to seamlessly dive into the future of blockchain and decentralized technologies.
                </TextAnimate>
                <button onClick={servicesHandler} className="relative z-50 inline-flex h-12 overflow-hidden mt-8 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Our Services &rarr;
                    </span>
                </button>

            </Vortex>
        </div>)
    );
}
