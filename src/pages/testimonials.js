import React from "react";
import "../styles/Testimonials.css";
import img from "../data/assets/testi_clint.png";
import img1 from "../data/assets/testi_logo.png";

function Testimonials(){
    return(
        <>
        <div id="testimonials">
            <div id="testimonials_container">
            <div id="testimonials_container_top">
                <p id="testimonials_title">Testimonials</p>
            </div>
            <div id="testimonials_container_middle">
                <div id="testi_logo">
                    <img src={img1} alt="logo"/>
                </div>
                <p id="testi_desc">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                <div id="testi_clint">
                    <div id="testi_clint_img">
                        <img src={img} alt="img"/>
                    </div>
                    <div id="testi_clint_matter">
                        <p id="testi_clint_name">Organize across</p>
                        <p id="testi_clint_designation">Ui designer</p>
                    </div>
                </div>
            </div>
            <div id="testimonials_container_bottom">
                <button>More Testimonials</button>
            </div>
            </div>
        </div>
        </>
    );
};
export default Testimonials;