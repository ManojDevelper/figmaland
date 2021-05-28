import React from "react";
import Banner from "./banner";
import Features from "./features";
import Prototyping from "./prototyping";
import Subscribe from "./subscribe";
import Patners from "./patners";
import Testimonials from "./testimonials";
import Pricing from "./pricing";
import Contact from "./contact";
import Footer from "./footer";

function index(){
  return(
    <>
    <Banner/>
    <Features/>
    <Prototyping/>
    <Subscribe/>
    <Patners/>
    <Testimonials/>
    <Pricing/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default index;