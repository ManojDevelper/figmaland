import React from "react";
import "../styles/Subscribe.css";
import { graphql, useStaticQuery } from "gatsby";

function Subscribe(){
    const data = useStaticQuery(graphql`
    query {
      subscribe: file(relativePath: {eq: "subscribe.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            description
            description2
            description3
            description4
            button
          }
        }
      }
       }
  `)
    return(
        <>
        <div id="subscribe">
            <div id="subscribe_container">
                <div id="subscribe_container_top">
                    <p id="subscribe_title">{data.subscribe.childMarkdownRemark.frontmatter.title}</p>
                    <p id="subscribe_desc">{data.subscribe.childMarkdownRemark.frontmatter.description}</p>
                    <p id="subscribe_desc_mob">{data.subscribe.childMarkdownRemark.frontmatter.description2}</p>
                </div>
                <div id="subscribe_container_bottom">
                    <p id="subscribe_container_bottom_title">{data.subscribe.childMarkdownRemark.frontmatter.description3}</p>
                    <p id="subscribe_container_bottom_desc">{data.subscribe.childMarkdownRemark.frontmatter.description4}</p>
                    <div id="subscribe_inputs">
                        <input type="text" placeholder="Your Email"/>
                        <button id="subscribe_btn">{data.subscribe.childMarkdownRemark.frontmatter.button}</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Subscribe;