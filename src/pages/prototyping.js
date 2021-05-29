import React from "react";
import "../styles/Prototyping.css";
import { graphql, useStaticQuery } from "gatsby";

function Prototyping() {
    const data = useStaticQuery(graphql`
    query {
      prorotyping: file(relativePath: {eq: "prototyping.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            description
            button
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
  `)
    return (
        <>
            <div id="prototyping">
                <div id="prototyping_container">
                    <div id="prototyping_container_top">
                        <p id="proto_title">{data.prorotyping.childMarkdownRemark.frontmatter.title}</p>
                        <p id="proto_desc">{data.prorotyping.childMarkdownRemark.frontmatter.description}</p>
                        <button id="proto_btn">{data.prorotyping.childMarkdownRemark.frontmatter.button}</button>
                    </div>
                    <div id="prototyping_container_bottom">
                        <img src={data.prorotyping.childMarkdownRemark.frontmatter.img.childImageSharp.fluid.src} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Prototyping;