import React from "react";
import "../styles/Subscribe.css";

function Subscribe(){
    return(
        <>
        <div id="subscribe">
            <div id="subscribe_container">
                <div id="subscribe_container_top">
                    <p id="subscribe_title">At your fingertips</p>
                    <p id="subscribe_desc">Lightning fast prototyping </p>
                    <p id="subscribe_desc_mob">Newsletter</p>
                </div>
                <div id="subscribe_container_bottom">
                    <p id="subscribe_container_bottom_title">Subscribe to our Newsletter</p>
                    <p id="subscribe_container_bottom_desc">Available exclusivery on Figmaland</p>
                    <div id="subscribe_inputs">
                        <input type="text" placeholder="Your Email"/>
                        <button id="subscribe_btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Subscribe;