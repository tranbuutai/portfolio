"use client";

import React, { useState, useEffect } from "react";

export default function Loading() {
  const [isSmallViewport, setIsSmallViewport] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth < 520);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text = isSmallViewport
    ? "Please wait a moment for my gift."
    : "Please wait for a little bit for my present.";

  const adjustedText = text
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-500 text-center text-white">
      <p className="animate-loading-bounce-letters space-x-[2px] text-xs uppercase max-sm:leading-8 sm:space-x-1 sm:text-sm md:text-xl">
        {adjustedText.map((char, index) => (
          <span
            key={index}
            style={{ "--loading-letter-index": index } as React.CSSProperties}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}
