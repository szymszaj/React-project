import "./style.css";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-neutral-gray-900 px-[92px] py-12 pb-[32px] pt-[104px] text-neutral-white">
      <div className="flex flex-col items-start gap-20"></div>
      <div className="mx-auto mb-20 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">O nas</h3>
          <ul className="mt-2 text-neutral-gray-300">
            <li>
              <Link
                href="/about"
                className="text-text-neutral-gray-300 underline-animation"
              >
                Nasza historia
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="text-text-neutral-gray-300 underline-animation"
              >
                Zespół
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-text-neutral-gray-300 underline-animation"
              >
                Kariera
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Kontakt</h3>
          <ul className="mt-2 text-neutral-gray-300">
            <li>
              <Link
                href="/contact"
                className="text-text-neutral-gray-300 underline-animation"
              >
                Formularz kontaktowy
              </Link>
            </li>
            <li>
              <a
                href="mailto:kontakt@przyklad.pl"
                className="text-text-neutral-gray-300 underline-animation"
              >
                kontakt@przyklad.pl
              </a>
            </li>
            <li>
              <a
                href="tel:+48123456789"
                className="text-text-neutral-gray-300 underline-animation"
              >
                +48 123 456 789
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Lokalizacja</h3>
          <div className="relative">
            <p className="underline-animation group mt-2 text-neutral-gray-300">
              1234 Ulica Przykladowa, Miasto, Polska
              <Link href="https://maps.google.com" target="_blank"></Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Social Media</h3>
          <ul className="mt-2 text-neutral-gray-300">
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-text-neutral-gray-300 underline-animation"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-text-neutral-gray-300 underline-animation"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-text-neutral-gray-300 underline-animation"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-8 border-b border-neutral-gray-700"></div>

      <div className="absolute bottom-0 right-0 col-span-1 mt-8 pb-4 pr-8 md:col-span-2 lg:col-span-4">
        <p>© 2024 Twoja Firma. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
