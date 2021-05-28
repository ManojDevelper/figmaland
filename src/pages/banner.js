import React from "react";
import "../styles/Banner.css";
import Navbars from "./nav";

function Banner() {
    return (
        <>
            <div id="banner">
            <Navbars/>
            <div id="banner_container_main">
                <div id="banner_container">
                    <p id="banner_title">We focus on ergonomics </p>
                    <p id="banner_desc">Most calendars are designed for teams.
Slate is designed for freelancers</p>
                    <button id="banner_button">Try For Free</button>
                </div>
            </div>
            </div>
        </>
    );
};
export default Banner;