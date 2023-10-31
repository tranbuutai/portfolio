import { useMemo } from "react";

type TextAnimationProps = {
  text: string;
  delay: number;
};

const TextAnimation: React.FC<TextAnimationProps> = ({ text, delay }) => {
  const replaceSpacesWithNbsp = (str: string) => {
    return str.split("").map((char) => (char === " " ? "\u00A0" : char));
  };

  const adjustedLetters = useMemo(() => replaceSpacesWithNbsp(text), [text]);
  const animationDuration = `${text.length * delay}s`;

  return (
    <>
      {adjustedLetters.map((letter, index) => (
        <span
          key={index}
          className="animate-letter-animation inline-block space-x-1"
          style={{
            animation: `text-animation ${animationDuration} ease-in-out infinite`,
            animationDelay: `${index * delay}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </>
  );
};

export default TextAnimation;
