import React from "react";
import "../styles/Pricing.css";

function Pricing() {
    return (
        <>
            <div id="pricing">
                <div id="pricing_container">
                    <div id="pricing_container_top">
                        <p id="pricing_title">Pricing</p>
                        <p id="pricing_desc">Most calendars are designed for teams. Slate is designed for freelancers</p>
                    </div>
                    <div id="pricing_container_bottom">
                        <div id="pricing_card">
                            <div id="pricing_card_top">
                                <p id="pricing_card_title">FREE</p>
                                <p id="pricing_card_desc">Organize across all apps by hand</p>
                            </div>
                            <div id="pricing_card_bottom">
                                <div id="pricing_card_bottom_prize_block">
                                    <div id="prizenumber_container"><p id="prizenumber">0</p></div>
                                    <div id="prize_matter">
                                        <p id="price_symbol">$</p>
                                        <p id="prize_per_month">Per Month</p>
                                    </div>
                                </div>
                                <div id="pricing_card_bottom_prize_button">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div id="pricing_card">
                            <div id="pricing_card_top">
                                <p id="pricing_card_title">STANDARD</p>
                                <p id="pricing_card_desc">Organize across all apps by hand</p>
                            </div>
                            <div id="pricing_card_bottom">
                                <div id="pricing_card_bottom_prize_block">
                                    <div id="prizenumber_container">
                                    <p id="prizenumber">10</p>
                                    </div>
                                    <div id="prize_matter">
                                        <p id="price_symbol">$</p>
                                        <p id="prize_per_month">Per Month</p>
                                    </div>
                                </div>
                                <div id="pricing_card_bottom_prize_button">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div id="pricing_card">
                            <div id="pricing_card_top">
                                <p id="pricing_card_title">BUSINESS</p>
                                <p id="pricing_card_desc">Organize across all apps by hand</p>
                            </div>
                            <div id="pricing_card_bottom">
                                <div id="pricing_card_bottom_prize_block">
                                    <div id="prizenumber_container">
                                    <p id="prizenumber">99</p>
                                    </div>
                                    <div id="prize_matter">
                                        <p id="price_symbol">$</p>
                                        <p id="prize_per_month">Per Month</p>
                                    </div>
                                </div>
                                <div id="pricing_card_bottom_prize_button">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Pricing;