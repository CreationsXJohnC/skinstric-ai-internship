import React, { useState } from "react";
import diamondSmall from "../assets/Diamond-dark-small.webp"
import diamondMedium from "../assets/Diamond-medium-medium.webp";
import diamondLarge from "../assets/Diamond-light-large.webp";

const DiamondButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="relative">
      {/* Small diamond - for demographics */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute transition-all duration-500 ${
            hoveredButton === "demographics"
              ? "w-[602px] h-[602px] opacity-100"
              : "w-[400px] h-[400px] opacity-0"
          }`}
        >
          <img
            src={diamondSmall}
            alt="Diamond Small"
            className="absolute w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Medium diamond - for cosmetic + skin */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute transition-all duration-500 ${
            hoveredButton === "cosmetic" || hoveredButton === "skin"
              ? "w-[682px] h-[682px] opacity-100"
              : "w-[400px] h-[400px] opacity-0"
          }`}
        >
          <img
            src={diamondMedium}
            alt="Diamond Medium"
            className="absolute w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Large diamond - for weather */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute transition-all duration-500 ${
            hoveredButton === "weather"
              ? "w-[762px] h-[762px] opacity-100"
              : "w-[400px] h-[400px] opacity-0"
          }`}
        >
          <img
            src={diamondLarge}
            alt="Diamond Large"
            className="absolute w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
        {/* Demographics */}
        <div className="flex items-center justify-center col-start-2">
          <a href="/results">
            <button
              className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300"
              onMouseEnter={() => setHoveredButton("demographics")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="transform -rotate-45">Demographics</span>
            </button>
          </a>
        </div>

        {/* Cosmetic Concerns */}
        <div className="flex items-center justify-center row-start-2 col-start-1">
          <button
            className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
            onMouseEnter={() => setHoveredButton("cosmetic")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="transform -rotate-45">Cosmetic Concerns</span>
          </button>
        </div>

        {/* Skin Type */}
        <div className="flex items-center justify-center row-start-2 col-start-3">
          <button
            className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
            onMouseEnter={() => setHoveredButton("skin")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="transform -rotate-45">Skin Type Details</span>
          </button>
        </div>

        {/* Weather */}
        <div className="flex items-center justify-center row-start-3 col-start-2">
          <button
            className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
            onMouseEnter={() => setHoveredButton("weather")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="transform -rotate-45">Weather</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiamondButtons;