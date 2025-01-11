"use client";

import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import React from "react";

const typingAnimation = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const letterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export default function Services() {
    const services = [
        "Web3 Education",
        "Decentralized CLI Tools",
        "Blockchain VMs",
        "Smart Contract Development",
        "NFT Creation",
        "DeFi Exploration",
        "DAO Simulations",
        "DApp Deployment",
    ];

    const servicesText = "Our Services";

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black">
            {/* Vortex Background */}
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={2500}
                baseHue={180}
                className="absolute inset-0 z-0"
            >
                {/* Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Main Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-10 text-center">
                    {/* Typing Animation */}
                    <motion.div
                        className="text-4xl md:text-6xl font-bold text-white"
                        variants={typingAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        {servicesText.split("").map((letter, index) => (
                            <motion.span key={index} variants={letterAnimation}>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Services Grid */}
                    <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-4 lg:gap-y-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 text-center bg-white/10 text-white rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <p className="text-lg font-semibold">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Vortex>
        </div>
    );
}
