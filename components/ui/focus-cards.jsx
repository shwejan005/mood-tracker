"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-2xl bg-white shadow-md overflow-hidden h-60 md:h-72 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <div className="flex flex-col items-center justify-center h-full bg-[#d2f1c6]">
      {/* Display emoji directly */}
      <div className="text-6xl">{card.emoji}</div>
      <div className="text-green-800 mt-8 text-center "> 
        <p className="font-bold mb-3">
          {card.def}
        </p>
        <p className="text-sm font-semibold ">
          {card.title}
        </p>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          def={card.def}
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

