import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import LeftBorder from "../assets/Rectangle 2779.svg"
import DisButton from "../assets/button-icon-text-shrunk.svg"

const Intro = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [issHovering, setIssHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 200);
    }, []);
  
    return (
      <div className="main__intro__page">
        {/* Navbar */}
        <div className="nav__row">
          <div className="navbar__left">
            <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
            <img className="navbar__left--img" src={LeftBracket} alt="" />
            <p className="navbar__left--page-name">INTRO</p>
            <img className="navbar__left--img" src={RightBracket} alt="" />
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
            ENTER CODE
          </button>
        </div>
  
        {/* Main content */}
        <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
          <div className="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            
            {/* Background dotted squares */}
            <div className="absolute insert-0 flex items-center justify-center lg:hidden">
              <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center lg:hidden">
              <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
            </div>
  
            {/* Heading */}
            <div id="main-headng" className="relative z-10 text-center">
              <h1
                className={`text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal leading-none transition-all duration-1000 ease-in-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                style={{
                  transform: isHovering
                    ? "translateX(-21.5rem)"
                    : issHovering
                    ? "translateX(21.5rem)"
                    : "translateX(0)",
                }}
              >
                Sophisticated <br />
                <span
                  className={`block text-[#1A1B1C] transition-all duration-1000 ease-in-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                  style={{
                    transform: isHovering
                      ? "translateX(-6rem)"
                      : issHovering
                      ? "translateX(5.7rem)"
                      : "translateX(0)",
                  }}
                >
                  skincare
                </span>
              </h1>
            </div>
  
            {/* Mobile text */}
            <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground text-[#1a1b1c83]">
              Skintric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs.
            </p>
  
            {/* Mobile CTA */}
            <div className="z-10 mt-4 lg:hidden">
              <div>
                <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
                  <span className="text-[12px] font-bold cursor-pointer">ENTER EXPERIENCE</span>
                  <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>
                  <span className="absolute left-[129px] scale-[0.5] hover:scale-60 duration-300">
                    <svg viewBox="0 0 24 24" width={24} height={24} className="fill-current text-black">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
  
            {/* Left Info */}
            <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] [@media(width>=1920px)]:left-[calc(-33vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
              <p>
                Skinstric developed an A.I. that creates a <br />
                highly-personalized routine tailored to <br />
                what your skin needs.
              </p>
            </div>
  
            {/* LEFT SECTION: DISCOVER A.I. */}
            <div
              id="left-section"
              className={`lag:block fixed left-[calc(-53vw)] xl:left-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px] transition-opacity duration-500 ease-in-out
                ${isHovering ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <div className="relative w-full h-full">
                <div className="[@media(width<=1023px)]:hidden w-full h-full border border-dotted border-[#A0A4AB] rotate-45 fixed inset-0"></div>
                <button
                  id="discover-button"
                  onMouseEnter={() => setIssHovering(true)}
                  onMouseLeave={() => setIssHovering(false)}
                  className="[@media(width<=1023px)]:hidden group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] cursor-pointer h-9 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/5 px-3 py-1 transition-transform duration-300"
                >
                  <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
                  <span className="absolute left-[20px] top-[8px] scale-[0.9] rotate-180 group-hover:scale-105 duration-300">▶</span>
                  <span>DISCOVER A.I.</span>
                </button>
              </div>
            </div>
  
            {/* RIGHT SECTION: TAKE TEST */}
            <div
              id="right-section"
              className={`hidden lg:block fixed top-1/2 right-[calc(-53vw)] xl:right-[calc(-50vw)] -translate-y-1/2 w-[500px] h-[500px] transition-opacity duration-500 ease-in-out
                ${issHovering ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
                <Link
                  id="task-test-button"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  to="/name"
                  className="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] cursor-pointer h-9 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 px-3 py-1 transition-transform duration-300"
                >
                  TAKE TEST
                  <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
                  <span className="absolute left-[111px] top-[9px] scale-[0.9] group-hover:scale-105 duration-300">▶</span>
                </Link>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Intro;