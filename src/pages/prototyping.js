import React from "react";
import "../styles/Prototyping.css";
import img1 from "../data/assets/Prototyping.png";

function Prototyping() {
    return (
        <>
            <div id="prototyping">
                <div id="prototyping_container">
                    <div id="prototyping_container_top">
                        <p id="proto_title">Lightning fast prototyping </p>
                        <p id="proto_desc">Most calendars are designed for teams. Slate is designed for freelancers</p>
                        <button id="proto_btn">Try For Free</button>
                    </div>
                    <div id="prototyping_container_bottom">
                        <img src={img1} alt="img"/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Prototyping;