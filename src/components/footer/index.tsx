import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="relative bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        <span className="mb-2 text-sm md:mb-0">
          © {new Date().getFullYear()} TBT. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
