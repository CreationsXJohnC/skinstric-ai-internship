import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp";
import RightBracket from "../assets/Rectangle 2711.webp";
import DiamondLarge from "../assets/Diamond-light-large.webp";
import DiamondMedium from "../assets/Diamond-medium-medium.webp";
import DiamondSmall from "../assets/Diamond-dark-small.webp";

const PrepAnalysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(null);

  // Resolve the most recent image (route state first, then sessionStorage, then localStorage as last resort)
  useEffect(() => {
    window.scrollTo(0, 0);

    // 1) Router state (freshest)
    const fromState =
      location.state?.previewImage ||
      location.state?.image ||
      location.state?.imageUrl ||
      location.state?.dataUrl;

    // 2) SessionStorage (current session)
    const fromSession =
      sessionStorage.getItem("uploadedImageDataUrl") ||
      sessionStorage.getItem("previewImage");

    // 3) LocalStorage (very last fallback)
    const fromLocal =
      localStorage.getItem("uploadedImageDataUrl") ||
      localStorage.getItem("previewImage");

    setImgSrc(fromState || fromSession || fromLocal || null);
  }, [location.state]);

  // After 3s, notify + go to /demographics
  useEffect(() => {
    const t = setTimeout(() => {
      window.alert("Your image has been successfully analyzed.");
      navigate("/demographics");
    }, 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="main__intro__page">
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

      <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
        <div className="absolute top-2 left-9 md:left-8 text-left" />

        {/* Center stage: ONLY the spinning diamonds (no image here) */}
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
          <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
            <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]" />
            <img
              alt="DiamondLarge"
              loading="lazy"
              width={484}
              height={484}
              className="absolute z-0 w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205"
              src={DiamondLarge}
            />
            <img
              alt="DiamondMedium"
              loading="lazy"
              width={448}
              height={448}
              className="absolute z-0 w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195"
              src={DiamondMedium}
            />
            <img
              alt="DiamondSmall"
              loading="lazy"
              width={408}
              height={408}
              className="absolute z-0 w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
              src={DiamondSmall}
            />
          </div>
        </div>

        {/* Top-right Preview ONLY (the image shows here, and only here) */}
        <div className="absolute top-4 right-7 md:top-8 md:right-8 transition-opacity duration-300 opacity-100">
          <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
            {imgSrc && (
              <img
                alt="Preview"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                src={imgSrc}
              />
            )}
          </div>
        </div>

        {/* 3s overlay while "analyzing" */}
        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-20">
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]" />
          <img
            alt="DiamondLarge"
            loading="lazy"
            width={484}
            height={484}
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-load rotate-205"
            src={DiamondLarge}
          />
          <img
            alt="DiamondMedium"
            loading="lazy"
            width={484}
            height={484}
            className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-loader rotate-195"
            src={DiamondMedium}
          />
          <img
            alt="DiamondSmall"
            loading="lazy"
            width={408}
            height={408}
            className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-loadest"
            src={DiamondSmall}
          />
          <div className="absolute bg-white p-4 space-y-0 shadow z-30">
            <p className="text-base font-semibold leading-6 tracking-tight">
              PREPARING YOUR ANALYSIS...
            </p>
            <div>
              <div className="flex items-center justify-center space-x-4 py-8" />
            </div>
          </div>
        </div>

        <input accept="image/*" className="hidden" type="file" />
      </div>

      <div className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0" />
    </div>
  );
};

export default PrepAnalysis;
