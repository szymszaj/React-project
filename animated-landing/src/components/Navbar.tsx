"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="mx-auto max-w-7xl">
                <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-md transition-colors duration-300 hover:bg-black/30 hover:border-white/20">


                    <Link href="/" className="relative z-10 text-xl font-bold text-white tracking-tighter">
                        Anti<span className="text-blue-500">Gravity</span>
                    </Link>


                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.span
                                            layoutId="nav-hover"
                                            className="absolute inset-0 z-[-1] rounded-full bg-white/10"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </AnimatePresence>
                                {item.name}
                            </Link>
                        ))}
                    </div>


                    <div className="hidden md:block">
                        <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95">
                            Get Started
                        </button>
                    </div>


                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-300 hover:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-6 right-6 top-24 overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-medium text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white">
                                    Get Started
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
