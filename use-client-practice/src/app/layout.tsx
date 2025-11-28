import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Use Client Practice - Next.js",
  description: "Projekt do nauki Server Components vs Client Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
