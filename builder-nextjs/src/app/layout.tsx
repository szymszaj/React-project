import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Builder.io + Next.js",
  description: "Projekt z integracją Builder.io i Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-white`}
      >
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="text-indigo-600 dark:text-indigo-400">
                builder
              </span>
              <span className="text-slate-900 dark:text-white">.next</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                Blog
              </Link>
              <a
                href="https://builder.io/content"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
              >
                Builder.io ↗
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-6 mt-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Builder.io + Next.js Integration
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a
                href="/blog"
                className="hover:text-indigo-500 transition-colors"
              >
                Blog
              </a>
              <a
                href="https://builder.io/c/docs/quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                Builder Docs
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                Next.js Docs
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
