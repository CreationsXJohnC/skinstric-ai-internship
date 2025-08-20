import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"


const Page3 = () => {
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
                    <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">CLICK TO TYPE</p>
                    <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')" className="relative z-10">
                        <div className="flex flex-col items-center"></div>
                        <input className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10" placeholder="Introduce Yourself" autoComplete="off" type="text" name="name" />
                        <button type="submit" className="sr-only">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page3;