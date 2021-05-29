import React from "react";
import "../styles/footer.css";
import img1 from "../data/assets/twitter.svg";
import img2 from "../data/assets/fb.svg";
import img3 from "../data/assets/linkdin.svg";
import img4 from "../data/assets/location.svg";
import img5 from "../data/assets/phone.svg";
import img6 from "../data/assets/mail.svg";
import { graphql, useStaticQuery } from "gatsby";

function Footer() {
    const data = useStaticQuery(graphql`
    query {
      footer: file(relativePath: {eq: "footer.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            footer {
              id
              pages
            }
          }
        }
      }
      contact: file(relativePath: {eq: "contact.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            address
            phone
            mail
          }
        }
      } 
       }
  `)
    return (
        <>
            <div id="footer">
                <div id="footer_container">
                    <div id="footer_container_block1">
                        <p id="footer_title">{data.footer.childMarkdownRemark.frontmatter.title}</p>
                        {data.footer.childMarkdownRemark.frontmatter.footer.map(footer => (
                            <p id="footer_matter" key={footer.id}>{footer.pages}</p>
                        ))}
                    </div>
                    <div id="footer_container_block2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3490908901667!2d79.83112131475997!3d11.950314991531679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363cdd1cdb735%3A0x4214399b4bc59e38!2sFidisys%20Technologies!5e0!3m2!1sen!2sin!4v1622175501319!5m2!1sen!2sin" allowfullscreen="" loading="lazy" id="map"></iframe>
                    </div>
                    <div id="footer_container_block3">
                        <div id="contact_container_block_side">
                            <div id="contact_container_block_side_blocks_main">
                                <div id="contact_container_block_side_blocks">
                                    <div id="contact_container_block_side_blocks_icons">
                                        <img src={img4} alt="img" />
                                    </div>
                                    <div id="contact_container_block_side_blocks_matter">
                                        <div>
                                            <p id="contact_address">{data.contact.childMarkdownRemark.frontmatter.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="contact_container_block_side_blocks">
                                    <div id="contact_container_block_side_blocks_icons">
                                        <img src={img5} alt="img" />
                                    </div>
                                    <div id="contact_container_block_side_blocks_matter">
                                        <div>
                                            <p id="contact_number">{data.contact.childMarkdownRemark.frontmatter.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="contact_container_block_side_blocks">
                                    <div id="contact_container_block_side_blocks_icons">
                                        <img src={img6} alt="img" />
                                    </div>
                                    <div id="contact_container_block_side_blocks_matter">
                                        <div>
                                            <p id="contact_mail">{data.contact.childMarkdownRemark.frontmatter.mail}</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="contact_container_block_side_icons">
                                    <div id="contact_icon">
                                        <img src={img1} alt="img" />
                                    </div>
                                    <div id="contact_icon">
                                        <img src={img2} alt="img" />
                                    </div>
                                    <div id="contact_icon">
                                        <img src={img3} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;