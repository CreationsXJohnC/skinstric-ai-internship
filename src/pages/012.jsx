import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import DiamondLarge from "../assets/Diamond-light-large.webp"
import DiamondMedium from "../assets/Diamond-medium-medium.webp"
import DiamondSmall from "../assets/Diamond-dark-small.webp"

const Page8 = () => {
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
                            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
                                <img alt="DiamondSmall" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" style={{position: "absolute", height: "100%", width: "100%", inset: 0, objectfit: "contain", color: "transparent"}} src={DiamondSmall} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Page8;