import { Header } from "@/lib/components/Header";
import { Hero } from "@/lib/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Apartment Listing</title>
        <meta
          name="description"
          content="Find your perfect apartment for rent."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      <main
        id="content"
        className="flex flex-col items-center justify-center flex-1 p-8 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Apartment</h1>
        <p className="text-lg">Your perfect home away from home.</p>
      </main>

      <footer className="text-center p-4 bg-gray-100">
        <p>&copy; 2025 Apartment Listing. All rights reserved.</p>
      </footer>
    </div>
  );
}
