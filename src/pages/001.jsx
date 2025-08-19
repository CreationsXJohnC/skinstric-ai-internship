import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp"
import RightBracket from "../assets/Rectangle 2711.webp"


const Page2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <body className="main__intro__page">
            <div className="nav__row">
                <div className="navbar__left">
                    <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
                    <img className="navbar__left--img" src={LeftBracket} alt="" />
                    <p className="navbar__left--page-name">INTRO</p>
                    <img className="navbar__left--img" src={RightBracket} alt="" />
                </div>
                <button className="navbar__enter-code">ENTER CODE</button>
            </div>
        </body>

    );
};

export default Page2;