export default function Loading() {
  const text = "Please wait a moment for my gift.";

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
