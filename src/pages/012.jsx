import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiamondSmall from "../assets/Diamond-dark-small.webp";
import DiamondButtons from "../components/DiamondButtons";
import LeftBracket from "../assets/Rectangle 2710.webp";
import RightBracket from "../assets/Rectangle 2711.webp";

const Demographics = () => {
  return (
    <>
      <div className="nav__row">
        <div className="navbar__left">
          <Link className="navbar__left--name" to="/">
            SKINSTRIC
          </Link>
          <img className="navbar__left--img" src={LeftBracket} alt="" />
          <p className="navbar__left--page-name">INTRO</p>
          <img className="navbar__left--img" src={RightBracket} alt="" />
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
          ENTER CODE
        </button>
      </div>
      <div>
        {/* SUBHEADER */}
        <div className="absolute top-10 left-8 text-left mt-5">
          <h1 className="text-base font-semibold leading-[24px] tracking-tight">
            A.I. ANALYSIS
          </h1>
          <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
            A.I. has estimated the following.
            <br />
            Fix estimated information if needed.
          </p>
        </div>

        {/* SELECT DEMOGRAPHICS */}
        <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
          <DiamondButtons diamondImageSrc={DiamondSmall} />
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <div className="inset-0" aria-label="Back" >
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                  BACK
                </span>
              </div>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <Link
                  to="/image"
                  className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"
                ></Link>
                <span className="absolute left-[16px] bottom-[11px] scale-[1] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                  ▶
                </span>
                <span className="text-sm font-semibold hidden sm:block ml-6">
                  BACK
                </span>
              </div>
            </div>
          </div>
          <a className="inline-block" href="/results">
            <div
              className="invisible"
              style={{
                position: "relative",
                translate: "none",
                rotate: "none",
                scale: "none",
                visibility: "visible",
                opacity: 1,
                transform: "translate(0px, 0%)",
              }}
            >
              <div>
                <div className=" w-12 h-12 felx items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    GET SUMMARY
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    GET SUMMARY
                  </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute right-[16px] bottom-[11px] scale-[1] hidden sm:block group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Demographics;
