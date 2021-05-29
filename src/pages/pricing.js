import React from "react";
import "../styles/Pricing.css";
import { graphql, useStaticQuery } from "gatsby";

function Pricing() {
    const data = useStaticQuery(graphql`
    query {
      pricing: file(relativePath: {eq: "pricing.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            description
            pricing {
              id
              title
              description
              prize
              button
            }
          }
        }
      }
       }
  `)
    return (
        <>
            <div id="pricing">
                <div id="pricing_container">
                    <div id="pricing_container_top">
                        <p id="pricing_title">{data.pricing.childMarkdownRemark.frontmatter.title}</p>
                        <p id="pricing_desc">{data.pricing.childMarkdownRemark.frontmatter.description}</p>
                    </div>
                    <div id="pricing_container_bottom">
                        {data.pricing.childMarkdownRemark.frontmatter.pricing.map(pricing => (
                            <div id="pricing_card" key={pricing.id}>
                                <div id="pricing_card_top">
                                    <p id="pricing_card_title">{pricing.title}</p>
                                    <p id="pricing_card_desc">{pricing.description}</p>
                                </div>
                                <div id="pricing_card_bottom">
                                    <div id="pricing_card_bottom_prize_block">
                                        <div id="prizenumber_container"><p id="prizenumber">{pricing.prize}</p></div>
                                        <div id="prize_matter">
                                            <p id="price_symbol">$</p>
                                            <p id="prize_per_month">Per Month</p>
                                        </div>
                                    </div>
                                    <div id="pricing_card_bottom_prize_button">
                                        <button>{pricing.button}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Pricing;