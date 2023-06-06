"use client";
import React, { useEffect, useState } from "react";

const VerticalLoopText = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex text-center text-4xl font-bold ">
        The text will be moving{" "}
        <div className="text-animation">
          <ul>
            <li className="text-[#ea4335]">Code</li>
            <li className="text-[#4285f4]">Build</li>
            <li className="text-[#34a853]">Create</li>
            <li className="text-[#fbbc04]">Design</li>
            <li className="text-[#ea4335]">Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalLoopText;
