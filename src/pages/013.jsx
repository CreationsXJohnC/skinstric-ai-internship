import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp";
import RightBracket from "../assets/Rectangle 2711.webp";
import RadioButton from "../assets/radioButton.webp";

// -------- Demo data (swap with your real outputs) --------
const DATA = {
  RACE: [
    { label: "Latino Hispanic", pct: 54 },
    { label: "White", pct: 22 },
    { label: "Black / African Descent", pct: 12 },
    { label: "Asian", pct: 10 },
    { label: "Other / Mixed", pct: 2 },
  ],
  AGE: [
    { label: "0-2", pct: 4 },
    { label: "3-9", pct: 3 },
    { label: "10-19", pct: 13 },
    { label: "20-29", pct: 4 },
    { label: "30-39", pct: 0 },
    { label: "40-49", pct: 0 },
    { label: "50-59", pct: 1 },
    { label: "60-69", pct: 70 },
    { label: "70+", pct: 1 },
  ],
  SEX: [
    { label: "MALE", pct: 52 },
    { label: "FEMALE", pct: 48 },
  ],
};

const CATEGORIES = ["RACE", "AGE", "SEX"];

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // which category is active (controls the right-hand list)
  const [activeCategory, setActiveCategory] = useState("AGE");

  // current selected value per category
  const [selected, setSelected] = useState({
    RACE: "Latino Hispanic",
    AGE: "30-39",
    SEX: "MALE",
  });

  // right-hand options for the active category
  const options = useMemo(() => DATA[activeCategory], [activeCategory]);

  // % for the active selection
  const activePct = useMemo(() => {
    const arr = DATA[activeCategory];
    const found = arr.find((o) => o.label === selected[activeCategory]);
    return found ? found.pct : 0;
  }, [activeCategory, selected]);

  // chart geometry
  const radius = 49.15;
  const stroke = 1.7;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - activePct / 100);

  const headingText = useMemo(() => {
    const v = selected[activeCategory];
    if (activeCategory === "AGE") return `${v} y.o.`;
    return v;
  }, [activeCategory, selected]);

  const clickRow = (label) => {
    setSelected((prev) => ({ ...prev, [activeCategory]: label }));
  };

  return (
    <div className="main__intro__page">
      <div className="nav__row">
        <div className="navbar__left">
          <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
          <img className="navbar__left--img" src={LeftBracket} alt="" />
          <p className="navbar__left--page-name">INTRO</p>
          <img className="navbar__left--img" src={RightBracket} alt="" />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]"
          type="button"
        >
          ENTER CODE
        </button>
      </div>

      <div className="min-h-screen md:min-h-[90vh] flex flex-col md:mt-5">
        <main className="flex-1 w-full bg-white overflow-none">
          <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
            <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
              <h2 className="text-base font-semibold mb-1 leading-[24px]">A.I. ANALYSIS</h2>
              <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">DEMOGRAPHICS</h3>
              <h4 className="text-sm mt-2 leading-[24px]">PREDICTED RACE & AGE</h4>
            </div>

            <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
              {/* LEFT: Category cards (clickable) */}
              <div className="bg-white space-y-3 md:flex md:flex-col h-[62%]">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  const value = selected[cat];
                  const base = "p-3 cursor-pointer flex-1 flex flex-col justify-between border-t transition-colors";
                  return (
                    <div
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={
                        base +
                        " " +
                        (isActive ? "bg-[#1A1B1C] text-white" : "bg-[#F3F3F4] hover:bg-[#E1E1E2] text-[#1A1B1C]")
                      }
                    >
                      <p className="text-base font-semibold">{value}</p>
                      <h4 className="text-base font-semibold mb-1">{cat}</h4>
                    </div>
                  );
                })}
              </div>

              {/* MIDDLE: Circle + percent */}
              <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
                <p className="hidden md:block md:absolute text-[32px] md:text-[40px] mb-2 left-7 top-4">
                  {headingText}
                </p>

                <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Trail */}
                    <path
                      d={`M 50,50 m 0,-${radius} a ${radius},${radius} 0 1 1 0,${2 *
                        radius} a ${radius},${radius} 0 1 1 0,-${2 * radius}`}
                      stroke="#E1E1E2"
                      strokeWidth={stroke}
                      fillOpacity={0}
                      style={{ strokeLinecap: "butt" }}
                    />
                    {/* Progress */}
                    <path
                      d={`M 50,50 m 0,-${radius} a ${radius},${radius} 0 1 1 0,${2 *
                        radius} a ${radius},${radius} 0 1 1 0,-${2 * radius}`}
                      stroke="#1A1B1C"
                      strokeWidth={stroke}
                      fillOpacity={0}
                      style={{
                        strokeLinecap: "butt",
                        transition: "stroke-dashoffset 0.6s ease",
                        strokeDasharray: `${circumference} ${circumference}`,
                        strokeDashoffset: dashOffset,
                        transformOrigin: "50% 50%",
                      }}
                    />
                    {/* Center text */}
                    <text
                      x="50"
                      y="52"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#1A1B1C"
                      style={{ fontSize: "12px", fontWeight: 400 }}
                    >
                      {activePct}
                      <tspan style={{ fontSize: "8px" }}>%</tspan>
                    </text>
                  </svg>
                </div>

                <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                  If A.I. estimate is wrong, select the correct one.
                </p>
              </div>

              {/* RIGHT: Options for active category (clickable) */}
              <div className="bg-gray-100 pt-4 pb-4 md:border-t">
                <div className="space-y-0">
                  <div className="flex justify-between px-4">
                    <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                      {activeCategory}
                    </h4>
                    <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                      A.I. CONFIDENCE
                    </h4>
                  </div>

                  {options.map(({ label, pct }) => {
                    const isSelected = selected[activeCategory] === label;
                    return (
                      <button
                        key={label}
                        onClick={() => clickRow(label)}
                        className={
                          "w-full flex items-center justify-between h-[48px] px-4 cursor-pointer text-left transition-colors " +
                          (isSelected ? "bg-[#1A1B1C] text-white" : "hover:bg-[#E1E1E2]")
                        }
                        type="button"
                      >
                        <div className="flex items-center gap-1">
                          <img
                            alt="radio button"
                            className="w-[12px] h-[12px] mr-2"
                            src={RadioButton}
                          />
                          <span className="font-normal text-base leading-6 tracking-tight">{label}</span>
                        </div>
                        <span className="font-normal text-base leading-6 tracking-tight">{pct}%</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-2 md:mb-2">
              <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
                <a href="/demographics">
                  <div>
                    <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                      <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                    </div>
                    <div className="group hidden sm:flex flex-row relative justify-center items-center">
                      <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300" />
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
                      <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85]" />
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

export default Results;
