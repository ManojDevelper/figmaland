import React from "react";
import "../styles/Testimonials.css";
import { graphql, useStaticQuery } from "gatsby";

function Testimonials(){
    const data = useStaticQuery(graphql`
    query {
        testimonials: file(relativePath: {eq: "testimonials.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            description
            description2
            designation
            button
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            logo1 {
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
    return(
        <>
        <div id="testimonials">
            <div id="testimonials_container">
            <div id="testimonials_container_top">
                <p id="testimonials_title">{data.testimonials.childMarkdownRemark.frontmatter.title}</p>
            </div>
            <div id="testimonials_container_middle">
                <div id="testi_logo">
                    <img src={data.testimonials.childMarkdownRemark.frontmatter.img.childImageSharp.fluid.src} alt="logo"/>
                </div>
                <p id="testi_desc">{data.testimonials.childMarkdownRemark.frontmatter.description}</p>
                <div id="testi_clint">
                    <div id="testi_clint_img">
                        <img src={data.testimonials.childMarkdownRemark.frontmatter.logo1.childImageSharp.fluid.src} alt="img"/>
                    </div>
                    <div id="testi_clint_matter">
                        <p id="testi_clint_name">{data.testimonials.childMarkdownRemark.frontmatter.description2}</p>
                        <p id="testi_clint_designation">{data.testimonials.childMarkdownRemark.frontmatter.designation}</p>
                    </div>
                </div>
            </div>
            <div id="testimonials_container_bottom">
                <button>{data.testimonials.childMarkdownRemark.frontmatter.button}</button>
            </div>
            </div>
        </div>
        </>
    );
};
export default Testimonials;