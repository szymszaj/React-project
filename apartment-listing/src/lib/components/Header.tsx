import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaAirbnb } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className="flex-grow flex justify-center gap-8">
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
      <div className="flex gap-4">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-gray-800 text-2xl hover:text-blue-500" />
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-gray-800 text-2xl hover:text-blue-500" />
        </Link>
        <Link
          href="https://airbnb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAirbnb className="text-gray-800 text-2xl hover:text-blue-500" />
        </Link>
      </div>
    </header>
  );
};

export { Header };
