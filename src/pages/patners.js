import React from "react";
import "../styles/Patners.css";
import { graphql, useStaticQuery } from "gatsby";

function Patners() {
    const data = useStaticQuery(graphql`
    query {
      patners: file(relativePath: {eq: "patners.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            description
            patners {
              id
              title
              description
              img {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
       }
  `)
    return (
        <>
            <div id="patner">
                <div id="patner_container">
                    <div id="patner_container_top">
                        <p id="patners_title">{data.patners.childMarkdownRemark.frontmatter.title}</p>
                        <p id="patners_desc">{data.patners.childMarkdownRemark.frontmatter.description}</p>
                    </div>
                    <div id="patner_container_bottom">
                        {data.patners.childMarkdownRemark.frontmatter.patners.map(patners => (
                            <div id="patner_container_card" key={patners.id}>
                                <div id="patner_container_card_b1">
                                    <p>{patners.title}</p>
                                </div>
                                <div id="patner_container_card_b2">
                                    <div id="patner_container_card_b2_container">
                                        <img src={patners.img.childImageSharp.fluid.src} alt="img" />
                                    </div>
                                </div>
                                <div id="patner_container_card_b3">
                                    <p>{patners.description}</p>
                                </div>
                            </div>
                        ))}
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