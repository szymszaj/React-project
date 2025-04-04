import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background bg-bg-home bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Computer
            <br /> Repair Shop
          </h1>
          <address>
            555 Main St. <br />
            Anytown, NY 12345
          </address>
          <p>Open Monday-Friday</p>
          <Link href="tel:987654321" className="hover:underline">
            987-654-321
          </Link>
        </div>
      </main>
    </div>
  );
}
