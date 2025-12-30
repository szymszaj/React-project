"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[100px]" />
                <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute bottom-[0%] left-[20%] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm"
                    >
                        🚀 Launching the future of web design
                    </motion.div>

                    <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                        Build Faster <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                            With Style
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
                        Experience the next generation of web interfaces. Smooth animations, modern aesthetics, and blazing fast performance suitable for any project.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-gray-200"
                        >
                            Get Started Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            View Documentation
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-gray-500 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
