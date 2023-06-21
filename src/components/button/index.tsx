import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <button className={`custom-btn ${className}`} {...rest}>
      <span>{children}</span>
      <span />
    </button>
  );
};

export default Button;
