"use client";

import React, { useState } from "react";
import { cardData } from "./cardData";

const CreditCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-[340px] h-[210px] perspective-1000 cursor-pointer`}
        onClick={handleCardClick}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white p-5 shadow-lg flex flex-col justify-between backface-hidden">
            <div className="absolute top-5 left-5 w-12 h-8 bg-yellow-400 rounded-md"></div>

            <div className="absolute top-5 right-5 text-xl font-bold">
              {cardData.Revolut}
            </div>

            <div className="uppercase text-sm mt-12">{cardData.cardHolder}</div>
          </div>

          <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white p-5 shadow-lg flex flex-col justify-between items-center rotate-y-180 backface-hidden">
            <div className="absolute top-5 left-0 w-full h-10 bg-black"></div>

            <div className="mt-14 text-lg tracking-widest text-left pl-2">
              {cardData.cardNumber}
            </div>

            <div className="flex justify-between w-full mt-4">
              <div className="text-sm pl-2">{cardData.expirationDate}</div>

              <div className="bg-white text-black px-2 py-1 rounded mr-4 text-sm">
                CVV: {cardData.cvv}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreditCard };
