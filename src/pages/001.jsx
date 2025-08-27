import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import DiamondLarge from "../assets/Diamond-light-large.webp"
import DiamondMedium from "../assets/Diamond-medium-medium.webp"
import DiamondSmall from "../assets/Diamond-dark-small.webp"
import CameraIcon from "../assets/camera-icon.webp"


const LoadingPic = () => {
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
            <div className="md:h-[85vh] h-[65vh] bg-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center h-[70vh] overflow-auto">
                    <div className="flex-0 flex flex-col md:flex-row items-center justify-center relative">
                        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
                        <img alt="DiamondLarge" loading="lazy" width={482} height={482} decoding="async" data-nimg="1" className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow" style={{color: "transparent"}} src={DiamondLarge} />
                        <img alt="DiamondMedium" loading="lazy" width={444.34} height={444.34} decoding="async" data-nimg="1" className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower" style={{color: "transparent"}} src={DiamondMedium} />
                        <img alt="DiamondSmall" loading="lazy" width={405.18} height={405.18} decoding="async" data-nimg="1" className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest" style={{color: "transparent"}} src={DiamondSmall} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center animate-pulse">
                            <img alt="CameraIcon" loading="lazy" width={136} height={136} decoding="async" data-nimg="1" className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] animate-pulse-grow" style={{color: "transparent"}} src={CameraIcon} />
                            <p className="absolute font-semibold text-sm md:text-base leading-[24px] tracking-tight translate-y-20 animate-pulse">SETTING UP CAMERA ...</p>
                        </div>
                    </div>
                    <div className="mt-0 text-center">
                        <p className="text-xs md:text-sm mb-4 leading-6">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
                        <div className="flex justify-center space-x-8">
                            <p className="text-xs md:text-sm leading-6">◇ NEUTRAL EXPRESSION</p>
                            <p className="text-xs md:text-sm leading-6">◇ FRONTAL POSE</p>
                            <p className="text-xs md:text-sm leading-6">◇ ADEQUATE LIGHTING</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoadingPic;