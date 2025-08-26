import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"
import RadioButton from "../assets/radioButton.webp"


const Page6 = () => {
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
            <div className="h-screen md:h-[90px] flex flex-col md:mt-5">
                <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
                    <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
                        <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
                            <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">A.I. ANALYSIS</h2>
                            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">DEMOGRAPHICS</h3>
                            <h4 className="text-sm mt-2 leading-[24px]">PREDICTED RACE & AGE</h4>
                        </div>
                        <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
                            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
                                <div className="p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                                    <p className="text-base font-semibold">Latino Hispanic</p>
                                    <h4 className="text-base font-semibold mb-1">RACE</h4>
                                </div>
                                <div className="p-3 cursor-pointer bg-[#1A1B1C] text-white flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                                    <p className="text-base font-semibold">30-39</p>
                                    <h4 className="text-base font-semibold mb-1">AGE</h4>
                                </div>
                                <div className="p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                                    <p className="text-base font-semibold">MALE</p>
                                    <h4 className="text-base font-semibold mb-1">SEX</h4>
                                </div>
                            </div>
                            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
                                <p className="hidden md:block md:absolute text-[40px] mb-2 left-7 top-4">30-39 y.o.</p>
                                <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                                    <div style={{width: "100%", height: "100%", maxheight: "384px", position: "relative", transform: "scale(1)", transformorigin: "center center"}}>
                                        <svg className="CircularProgressbar-tail text-[#1A1B1C]" viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                                            <path className="CircularProgressbar-trail" d="M 50,50 m 0,-49.15 a 49.15,49.15 0 1 1 0,98.3 a 49.15,49.15 0 1 1 0,98.3" strokeWidth={1.7} fillOpacity={0} style={{strokeLinecap: "butt", strokeDasharray: "308.819px, 308.819px", strokeDashoffset: "0px"}}></path>
                                            <path className="CircularProgressbar-path" d="M 50,50 m 0,-49.15 a 49.15,49.15 0 1 1 0,98.3 a 49.15,49.15 0 1 1 0,98.3" strokeWidth={1.7} fillOpacity={0} style={{stroke: "rgb(26, 27, 28)", strokeLinecap: "butt", transitionDuration: "0.8s", strokeDasharray: "308.819px, 308.819px", strokeDashoffset: "308.819px"}}></path>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <p className="text-3xl md:text-[40px] font-normal">0 <span className="absolute text-xl md:text-3xl">%</span></p>
                                        </div>
                                    </div>
                                </div>
                                <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] ld:left-[30%] xl:left-[40%] 2xl:left-[45%]">If A.I. estimate us wrong, select the correct one.</p>
                            </div>
                            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
                                <div className="space-y-0">
                                    <div className="flex justify-between px-4">
                                        <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">AGE</h4>
                                        <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">A.I. CONFIDENCE</h4>
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">0-2</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 -tracking-tight">4%</span>
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">3-9</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">3%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">10-19</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">13%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">20-29</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">4%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer bg-[#1A1B1C] text-white">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">30-39</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">0%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">40-49</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">0%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">50-59</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">1%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">60-69</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">70%</span> 
                                    </div>
                                    <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <img alt="radio button" loading="lazy" decoding="async" data-nimg="1" className="w-[12px] h-[12px] mr-2" style={{color: "transparent"}} src={RadioButton} />
                                            <span className="font-normal text-base leading-6 tracking-tight">70+</span>
                                        </div>
                                        <span className="font-normal text-base leading-6 tracking-tight">1%</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
                            <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
                                <a href="/page5">
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
                                <a href="/">
                                    <div>
                                        <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                                            <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">HOME</span>
                                        </div>
                                        <div className="hidden sm:flex flex-row relative justify-center items-center">
                                            <span className="text-sm font-semibold hidden sm:block mr-5">HOME</span>
                                            <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85]"></div>
                                            <span className="absolute right-[16px] bottom-[11px] scale-[1] hidden sm:block">▶</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
};

export default Page6;