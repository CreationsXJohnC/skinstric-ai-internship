import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import CameraIcon from "../assets/camera-icon.webp"
import ResScanLine from "../assets/ResScanLine.webp"
import SquareLarge from "../assets/ResDiamond-large.webp"
import SquareMedium from "../assets/ResDiamond-medium.webp"
import SquareSmall from "../assets/ResDiamond-small.webp"
import GalleryIcon from "../assets/gallery-icon.webp"
import ResGalleryLine from "../assets/ResGalleryLine.webp"


const Image = () => {
    const [cameraPopUp, setCameraPopUp] = useState(false)


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
            <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
                <div className="absolute top-2 left-9 md:left-8 text-left">
                    <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
                </div>
                <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
                    <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center">
                        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
                        <img alt="DiamondLarge" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200" src={SquareLarge} />
                        <img alt="DiamondMedium" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190" src={SquareMedium} />
                        <img alt="DiamondSmall" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest" src={SquareSmall} />
                        <div className="absolute insert-0 flex flex-col items-center justify-center">
                            <img alt="CameraIcon" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer" src={CameraIcon} onClick={() => setCameraPopUp(true)}/>
                            <div className="absolute bottom-[1%] right-[90px] md:top-[-25%] md:right-[-180px] translate-y-[-20px]">
                                <p className="text-xs md:text-sm font-normal mt-1 leading-[24px]">
                                    ALLOW A.I. <br /> TO SCAN YOUR FACE 
                                </p>
                            </div>
                                <img alt="Scan Line" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute hidden w-[66px] h-[59px] md:block md:right-[-35px] md:top-[-33px]" src={ResScanLine} />
                        </div>
                    </div>
                    <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
                        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
                        <img alt="DiamondLarge" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205" src={SquareLarge} />
                        <img alt="DiamondMedium" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195" src={SquareMedium} />
                        <img alt="DiamondSmall" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest" src={SquareSmall} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <img alt="Photo Upload Icon" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer" src={GalleryIcon} />
                            <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
                                <p className="text-[12px] md:text-[14px] font-normal mt-2 leading-[24px] text-right">
                                    ALLOW A.I. <br /> ACCESS GALLERY
                                </p>
                                <img alt="GalleryLine" loading="lazy" decoding="async" data-nimg="1" style={{color: "transparent"}} className="absolute hidden w-[66.33px] h-[59.37px] md:block md:left-[120px] md:bottom-[39px]" src={ResGalleryLine} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8 transition-opacity duration-300 opacity-100">
                        <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
                        <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden"></div>
                    </div>
                    <input accept="image/*" className="hidden" type="file" />
                </div>
                <div className={`absolute md:top-[43%] md:left-[500px] w-[352px] z-50 ${cameraPopUp ? "block" : "hidden"}`}>
                            <div className="bg-[#1A1B1C] pt-4 pb-2">
                                <h2 className="text-[#FCFCFC] text-base font-semibold mb-12 leading-[24px] pl-4">ALLOW A.I. TO ACCESS YOUR CAMERA</h2>
                                <div className="flex mt-4 border-t border-[#FCFCFC] pt-2">
                                    <button className={`px-7 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500`} onClick={() => setCameraPopUp(false)}>DENY</button>
                                    <Link to="/loadingcam"><button className={`px-5 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300`} >ALLOW</button></Link>
                                </div>
                            </div>
                        </div>
                <div className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0">
                    <div className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">
                        <a className="relative" aria-label="Back" href="/city">
                            <div>
                                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                                </div>
                                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                                    <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                                    <span className="absolute left-[16px] bottom-[11px] scale-[1] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                                    <span className="text-sm font-semibold hidden sm:block ml-6">BACK</span>
                                </div>
                            </div>
                        </a>
                        <a href="/page5">
                            <div className="hidden">
                                <div>
                                    <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                        <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">PROCEED</span>
                                    </div>
                                    <div className="group hidden sm:flex flex-row relative justify-center items-center">
                                        <span className="text-sm font-semibold hidden sm:block mr-5">PROCEED</span>
                                        <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                                        <span className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Image;