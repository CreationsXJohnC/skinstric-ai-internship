import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import DiamondLarge from "../assets/Diamond-light-large.webp"
import DiamondMedium from "../assets/Diamond-medium-medium.webp"
import DiamondSmall from "../assets/Diamond-dark-small.webp"


const InfoLoaded = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main__intro__page">
            <div className="nav__row">
                <div className="navbar__left">
                    <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
                    <img className="navbar__left--img" src={LeftBracket} alt="" />
                    <p className="navbar__left--page-name">INTRO</p>
                    <img className="navbar__left--img" src={RightBracket} alt="" />
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">ENTER CODE</button>
            </div>
            <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
                <div className="absolute top-16 left-9 text-left">
                    <p className="font-semibold text-xs">TO START ANALYSIS</p>
                </div>
                <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
                    <div className="flex flex-col items-center gap-4 z-10">
                        <p className="text-2xl font-normal text-[#1A1B1C] tracking-wide">Thank You!</p>
                        <p className="text-lg text-gray-600">Proceed for the next step</p>
                    </div>
                    <img alt="Diamond Large" loading="lazy" decoding="async" data-nimg="1" className="absolute w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190 color:transparent" src={DiamondLarge} />
                    <img alt="Diamond Medium" loading="lazy" decoding="async" data-nimg="1" className="absolute w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185 color:transparent" src={DiamondMedium} />
                    <img alt="Diamond Small" loading="lazy" decoding="async" data-nimg="1" className="absolute w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest color:transparent" src={DiamondSmall} />
                </div>
                <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
                    <div className="inset-0" aria-label="Back" >
                        <div>
                            <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                            </div>
                            <div className="group hidden sm:flex flex-row relative justify-center items-center">
                                <Link to="/name" className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></Link>
                                <span className="absolute left-[16px] bottom-[11px] scale-[1] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                                <span className="text-sm font-semibold hidden sm:block ml-6">BACK</span>
                            </div>
                        </div>
                    </div>
                    <a className="inline-block" href="/image">
                        <div className="invisible" style={{position: "relative",translate: "none",rotate: "none",scale: "none",visibility: "visible",opacity: 1,transform: "translate(0px, 0%)"}} >
                            <div>
                                <div className=" w-12 h-12 felx items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">PROCEED</span>
                                </div>
                                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                                    <span className="text-sm font-semibold hidden sm:block mr-5">PROCEED</span>
                                    <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                                    <span className="absolute right-[16px] bottom-[11px] scale-[1] hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default InfoLoaded;