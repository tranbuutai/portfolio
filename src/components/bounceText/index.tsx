type BounceTextProps = {
  text: string;
  delay: number;
};

const BounceText: React.FC<BounceTextProps> = ({ text, delay }) => {
  const letters = text.split("");
  const animationDuration = `${text.length * delay}s`;

  return (
    <>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="animate-letter-bounce inline-block"
          style={{
            animation: `bounce ${animationDuration} ease-in-out infinite`,
            animationDelay: `${index * delay}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </>
  );
};

export default BounceText;
