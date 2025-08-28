import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import DiamondLarge from "../assets/Diamond-light-large.webp"
import DiamondMedium from "../assets/Diamond-medium-medium.webp"
import DiamondSmall from "../assets/Diamond-dark-small.webp"

const Demographics = () => {
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsHovering(true), 200);
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
            <div>
                <div className="absolute top-10 left-8 text-left mt-5">
                    <h1 className="text-base font-semibold leading-[24px] tracking-tight">A.I. ANALYSIS</h1>
                    <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
                        A.I. has estimated the following. <br /> Fix estimated information if needed.
                    </p>
                </div>
                <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className={`absolute transition-all duration-400 w-[400px] h-[400px] ${setIsHovering ? "w-[602px] h-[602px] opacity-100" : "w-[400px] h-[400px] opacity-0"}`}>
                                <img alt="DiamondSmall" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" style={{position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "contain", color: "transparent"}} src={DiamondSmall} />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
                                <img alt="DiamondMedium" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" style={{position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "contain", color: "transparent"}} src={DiamondMedium} />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
                                <img alt="DiamondLarge" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" style={{position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "contain", color: "transparent"}} src={DiamondLarge} />
                            </div>
                        </div>
                        <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
                            <div className="flex items-center justify-center col-start-2">
                                <a href="/results">
                                    <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300" style={{transform: setIsHovering ? "w-[602px] h-[602px] opacity-100" : "w-[400px] h-[400px] opacity-0" }}>
                                        <span className="transform -rotate-45">Demographics</span>
                                    </button>
                                </a>
                            </div>
                            <div className="flex items-center justify-center row-start-2 col-start-1">
                                <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                                    <span className="transform -rotate-45">Cosmetic Concerns</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-center row-start-2 col-start-3">
                                <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                                    <span className="transform -rotate-45">Skin Type Details</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-center row-start-3 col-start-2">
                                <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                                    <span className="transform -rotate-45">Weather</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 md:pt-12 pb-8 bg-white sticky md:static bottom-40 mb-0 md:mb-0">
                    <div className="flex justify-between max-w-full mx-auto px-13 md:px-9">
                        <a href="/image">
                            <div>
                                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                                </div>
                                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                                    <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                                    <span className="absolute left-[16px] bottom-[11px] scale-[1] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                                    <span className="text-sm font-semibold sm:lock ml-6">BACK</span>
                                </div>
                            </div>
                        </a>
                        <a href="/results">
                            <div>
                                <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">SUM</span>
                                </div>
                                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                                    <span className="text-sm font-semibold hidden sm:block mr-5">GET SUMMARY</span>
                                    <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                                    <span className="absolute right-[16px] bottom-[11px] scale-[1] hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Demographics;