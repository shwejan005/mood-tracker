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
      <p className="mt-8 text-center text-sm font-medium text-green-800">
        {card.title}
      </p>
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

