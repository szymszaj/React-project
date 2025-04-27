"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaAirbnb } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <button
        className="md:hidden text-gray-800 text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className="md:flex md:items-center md:justify-between w-full hidden">
        <nav className="flex flex-col md:flex-row md:items-center md:gap-8 md:justify-center w-full">
          <Link
            href="/"
            className="text-gray-800 font-bold hover:text-blue-500 p-4 md:p-0"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 font-bold hover:text-blue-500 p-4 md:p-0"
          >
            Contact
          </Link>
          <Link
            href="/gallery"
            className="text-gray-800 font-bold hover:text-blue-500 p-4 md:p-0"
          >
            Gallery
          </Link>
        </nav>
        <div className="flex gap-4 p-4 md:p-0">
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
      </div>
      <nav
        className={`flex-col ${
          menuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-md md:hidden`}
      >
        <Link
          href="/"
          className="text-gray-800 font-bold hover:text-blue-500 p-4"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="text-gray-800 font-bold hover:text-blue-500 p-4"
        >
          Contact
        </Link>
        <Link
          href="/gallery"
          className="text-gray-800 font-bold hover:text-blue-500 p-4"
        >
          Gallery
        </Link>
        <div className="flex gap-4 p-4 justify-center">
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
      </nav>
    </header>
  );
};

export { Header };
