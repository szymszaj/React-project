import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className="flex gap-8">
        <Link href="/" className="text-gray-800 font-bold hover:text-blue-500">
          Home
        </Link>
        <Link
          href="/contact"
          className="text-gray-800 font-bold hover:text-blue-500"
        >
          Contact
        </Link>
        <Link
          href="/gallery"
          className="text-gray-800 font-bold hover:text-blue-500"
        >
          Gallery
        </Link>
      </nav>
    </header>
  );
};

export { Header };
