export default function Loading() {
  const text = "Please wait for a little bit for my present.";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-500 text-3xl text-white">
      <p className="animate-loading-bounce-letters space-x-1 uppercase">
        {text.split("").map((char, index) => (
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
