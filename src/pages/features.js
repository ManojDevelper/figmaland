import React from "react";
import "../styles/Features.css";
import { graphql, useStaticQuery } from "gatsby";

function Features() {
    const data = useStaticQuery(graphql`
    query {
      features:  file(relativePath: {eq: "features.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            title
            description
            description2
            button
            features {
              id
              title
              description
              icon {
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
            <div id="features">
                <div id="features_container">
                    <div id="features_top">
                        <p id="feature_title">{data.features.childMarkdownRemark.frontmatter.description1}</p>
                        <p id="feature_title2">{data.features.childMarkdownRemark.frontmatter.title}</p>
                        <p id="feature_description">{data.features.childMarkdownRemark.frontmatter.description2}</p>
                    </div>
                    <div id="features_bottom">
                        <div id="features_bottom_box_container">
                            {data.features.childMarkdownRemark.frontmatter.features.map(features => (
                                <div id="features_bottom_box" key={features.id}>
                                    <div id="features_bottom_box_top">
                                        <div id="features_bottom_box_top_logo"><img src={features.icon.childImageSharp.fluid.src} alt="img" /></div>
                                        <div id="features_bottom_box_top_matter"><p id="f_card_title">{features.title}</p></div>
                                    </div>
                                    <div id="features_bottom_box_bottom">
                                        <p>{features.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Features;