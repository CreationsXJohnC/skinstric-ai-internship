import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Page1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main__intro__page">
            <div className="row">
                <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
                <img className="navbar__left" src="" alt="" />
                <p className="navbar__left--page-name">INTRO</p>
                <img className="navbar__left" src="" alt="" />
                <button className="navbar__enter-code">ENTER CODE</button>
            </div>
        </div>

    );
};

export default Page1;