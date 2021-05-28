import React from "react";
import "../styles/Patners.css";
import img1 from "../data/assets/p_card1.png";
import img2 from "../data/assets/p_card2.png";
import img3 from "../data/assets/p_card3.png";
import img5 from "../data/assets/p_card5.png";
import img6 from "../data/assets/p_card6.png";

function Patners() {
    return (
        <>
            <div id="patner">
                <div id="patner_container">
                    <div id="patner_container_top">
                        <p id="patners_title">Partners</p>
                        <p id="patners_desc">Most calendars are designed for teams. Slate is designed for freelancers</p>
                    </div>
                    <div id="patner_container_bottom">
                        <div id="patner_container_card">
                            <div id="patner_container_card_b1">
                                <p>Client Name</p>
                            </div>
                            <div id="patner_container_card_b2">
                                <div id="patner_container_card_b2_container">
                                    <img src={img1} alt="img" />
                                </div>
                            </div>
                            <div id="patner_container_card_b3">
                                <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            </div>
                        </div>
                        <div id="patner_container_card">
                            <div id="patner_container_card_b1">
                                <p>Client Name</p>
                            </div>
                            <div id="patner_container_card_b2">
                                <div id="patner_container_card_b2_container">
                                    <img src={img2} alt="img" />
                                </div>
                            </div>
                            <div id="patner_container_card_b3">
                                <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            </div>
                        </div>
                        <div id="patner_container_card">
                            <div id="patner_container_card_b1">
                                <p>Client Name</p>
                            </div>
                            <div id="patner_container_card_b2">
                                <div id="patner_container_card_b2_container">
                                    <img src={img3} alt="img" />
                                </div>
                            </div>
                            <div id="patner_container_card_b3">
                                <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            </div>
                        </div>
                        <div id="patner_container_card">
                            <div id="patner_container_card_b1">
                                <p>Client Name</p>
                            </div>
                            <div id="patner_container_card_b2">
                                <div id="patner_container_card_b2_container">
                                    <img src={img3} alt="img" />
                                </div>
                            </div>
                            <div id="patner_container_card_b3">
                                <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            </div>
                        </div>
                        <div id="patner_container_card">
                            <div id="patner_container_card_b1">
                                <p>Client Name</p>
                            </div>
                            <div id="patner_container_card_b2">
                                <div id="patner_container_card_b2_container">
                                    <img src={img5} alt="img" />
                                </div>
                            </div>
                            <div id="patner_container_card_b3">
                                <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            </div>
                        </div>
                        <div id="patner_container_card">
                            <div id="patner_container_card_b1">
                                <p>Client Name</p>
                            </div>
                            <div id="patner_container_card_b2">
                                <div id="patner_container_card_b2_container">
                                    <img src={img6} alt="img" />
                                </div>
                            </div>
                            <div id="patner_container_card_b3">
                                <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            </div>
                        </div>
                    </div>
                    <div id="patner_btn">
                        <button>Try For Free</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Patners;