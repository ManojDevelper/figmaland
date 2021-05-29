import React from "react";
import "../styles/Banner.css";
import Navbars from "./nav";
import { graphql, useStaticQuery } from "gatsby";

function Banner() {
    const data = useStaticQuery(graphql`
      query {
        banner: file(relativePath: {eq: "banner.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                title
                description
                description2
                button
              }
            }
          } 
         }
    `)
    return (
        <>
            <div id="banner">
                <Navbars />
                <div id="banner_container_main">
                    <div id="banner_container">
                        <p id="banner_title">{data.banner.childMarkdownRemark.frontmatter.description}</p>
                        <p id="banner_desc">{data.banner.childMarkdownRemark.frontmatter.description2}</p>
                        <button id="banner_button">{data.banner.childMarkdownRemark.frontmatter.button}</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Banner;