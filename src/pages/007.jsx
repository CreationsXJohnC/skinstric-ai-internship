import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import DiamondLarge from "../assets/Diamond-light-large.webp"
import DiamondMedium from "../assets/Diamond-medium-medium.webp"
import DiamondSmall from "../assets/Diamond-dark-small.webp"


const PrepAnalysis = () => {
    {/* const navigate = useNavigate() */}

    useEffect(() => {
        window.scrollTo(0, 0);
        {/* setTimeout(() => navigate("/demographics"), 3000); */}
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
            <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
                <div className="absolute top-2 left-9 md:left-8 text-left"></div>
                <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
                    <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center"></div>
                    <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
                        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
                        <img alt="DiamondLarge" loading="lazy" width={484} height={484} decoding="async" data-nimg="1" className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205" style={{color: "transparent"}} src={DiamondLarge} />
                        <img alt="DiamondMedium" loading="lazy" width={448} height={448} decoding="async" data-nimg="1" className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195" style={{color: "transparent"}} src={DiamondMedium} />
                        <img alt="DiamondSmall" loading="lazy" width={408} height={408} decoding="async" data-nimg="1" className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18] animate-spin-slowest" style={{color: "transparent"}} src={DiamondSmall} />
                        <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]"></div>
                    </div>
                </div>
                <div className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8 transition-opacity duration-300 opacity-100">
                    <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
                    <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
                        <img alt="Preview" width={128} height={128} decoding="async" data-nimg="1" className="w-full h-full object-cover" style={{color: "transparent"}} />
                    </div>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-11">
                    <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
                    <img alt="DiamondLarge" loading="lazy" width={484} height={484} decoding="async" data-nimg="1" className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-load rotate-205" style={{color: "transparent"}} src={DiamondLarge} />
                    <img alt="DiamondMedium" loading="lazy" width={484} height={484} decoding="async" data-nimg="1" className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-loader rotate-195" style={{color: "transparent"}} src={DiamondMedium} />
                    <img alt="DiamondSmall" loading="lazy" width={408} height={408} decoding="async" data-nimg="1" className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-loadest" style={{color: "transparent"}} src={DiamondSmall} />
                    <div className="absolute bg-white p-4 space-y-0">
                        <p className="text-base font-semibold leading-6 tracking-tight">PREPARING YOUR ANALYSIS...</p>
                            <div>
                                <div className="flex items-center justify-center space-x-4 py-8"></div>
                            </div>
                    </div>
                </div>
                <input accept="image/*" className="hidden" type="file" />
            </div>
            <div className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0"></div>
        </div>
    );
};
    
    export default PrepAnalysis;