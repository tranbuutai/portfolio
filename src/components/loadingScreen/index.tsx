import React, { useMemo } from "react";

const Loading: React.FC = () => {
  const text = "Please wait a moment for my gift.";

  const replaceSpacesWithNbsp = (str: string) => {
    return str.split("").map((char) => (char === " " ? "\u00A0" : char));
  };

  const adjustedText = useMemo(() => replaceSpacesWithNbsp(text), [text]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-500 text-white">
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
};

export default Loading;
