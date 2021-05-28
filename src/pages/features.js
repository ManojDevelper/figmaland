import React from "react";
import "../styles/Features.css";
import c1 from "../data/assets/f_card1.svg";
import c2 from "../data/assets/f_card2.svg";
import c3 from "../data/assets/f_card3.svg";

function Features() {
    return (
        <>
            <div id="features">
                <div id="features_container">
                    <div id="features_top">
                        <p id="feature_title">At your fingertips</p>
                        <p id="feature_title2">Features</p>
                        <p id="feature_description">Most calendars are designed for teams. Slate is designed for freelancers</p>
                    </div>
                    <div id="features_bottom">
                        <div id="features_bottom_box_container">
                            <div id="features_bottom_box">
                                <div id="features_bottom_box_top">
                                    <div id="features_bottom_box_top_logo"><img src={c1} alt="img" /></div>
                                    <div id="features_bottom_box_top_matter"><p id="f_card_title">The best products start with Sketch</p></div>
                                </div>
                                <div id="features_bottom_box_bottom">
                                    <p>Slate helps you see how many
                                    more days you need to work to reach your financial goal.</p>
                                </div>
                            </div>
                            <div id="features_bottom_box">
                                <div id="features_bottom_box_top">
                                    <div id="features_bottom_box_top_logo"><img src={c2} alt="img" /></div>
                                    <div id="features_bottom_box_top_matter"><p id="f_card_title">Fastest way to organize</p></div>
                                </div>
                                <div id="features_bottom_box_bottom">
                                    <p>Slate helps you see how many more days you need to work to reach your financial goal. </p>
                                </div>
                            </div>
                            <div id="features_bottom_box">
                                <div id="features_bottom_box_top">
                                    <div id="features_bottom_box_top_logo"><img src={c3} alt="img" /></div>
                                    <div id="features_bottom_box_top_matter"><p id="f_card_title">Work better together</p></div>
                                </div>
                                <div id="features_bottom_box_bottom">
                                    <p>Slate helps you see how many more days you need to work to reach your financial goal. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Features;