"use client";
import React, { useEffect, useState } from "react";

const VerticalLoopText = () => {
  return (
    <div className="relative z-10 flex h-[90vh] flex-col items-center justify-center text-white">
      <h1 className="mb-12 text-center text-6xl font-bold">
        Hi! Welcome to My Site
      </h1>
      <div className="flex text-center text-4xl font-bold">
        My name is Tai, and I'm a
        <div className="text-animation">
          <ul>
            <li className="text-[#ea4335]">Coder.</li>
            <li className="text-[#4285f4]">Gamer.</li>
            <li className="text-[#fbbc04]">Engineer.</li>
            <li className="text-[#4285f4]">Builder.</li>
            <li className="text-[#ea4335]">Coder.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalLoopText;
