import React, { useEffect, useState, ComponentType, useMemo } from "react";
import classNames from "classnames";

type LoadingProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const Loading: React.FC<LoadingProps> = ({ isLoading, children }) => {
  const text = "Please wait a moment for my gift";
  const loadingClassnames = classNames(
    "fixed inset-0 z-[9999] ml-0 flex items-center justify-center bg-black-500 text-white transition ease-in-out duration-1000",
    { "-translate-y-full": !isLoading },
  );
  const replaceSpacesWithNbsp = (str: string) => {
    return str.split("").map((char) => (char === " " ? "\u00A0" : char));
  };

  const adjustedText = useMemo(() => replaceSpacesWithNbsp(text), [text]);

  return (
    <>
      <div className={loadingClassnames}>
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
      {children}
    </>
  );
};

function withLoading<P>(Component: ComponentType<P>) {
  return function WrappedComponent(props: JSX.IntrinsicAttributes & P) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false);
    }, []);

    return <Loading isLoading={isLoading}>{<Component {...props} />}</Loading>;
  };
}

export default withLoading;
