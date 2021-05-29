import React, { useState, useEffect } from 'react';
import '../styles/Nav.css'
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../data/assets/logo.svg";
import ham1 from "../data/assets/ham.svg";
import ham2 from "../data/assets/close.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars() {
  useEffect(() => {
    window.addEventListener('resize', showButton);

    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('resize', showButton);

      window.removeEventListener('scroll', changeBackground);
    }
  }, [])
  const [navbar, setNavbar] = useState(false);
  const [button, setButton] = useState();


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    // eslint-disable-next-line
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  };


  return (
    <>
      <Navbar id={navbar ? "nav_container" : "nav_container2"} expand="xl" collapseOnSelect={true}>
        <div id="nav_logo"><img src={Logo} alt="img" /></div>
        <Navbar.Toggle className="toggle">
          <div id="toggle" aria-controls="navbarResponsive" className="ntbtn">
            <img src={ham1} alt="img" />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Navbar.Toggle className="toggle">
            <div id="toggle" aria-controls="navbarResponsive" className="ntbtn">
              <img src={ham2} alt="img" />
            </div>
          </Navbar.Toggle>
          <Nav navbarScroll id="nav">
            <p id="nav_links"><Nav.Link href="#banner" id="nav_main_link" activeclassName='active'>Home</Nav.Link></p>
            <p id="nav_links"><Nav.Link href="#features" id="nav_main_link" activeclassName='active'>Product</Nav.Link></p>
            <p id="nav_links"><Nav.Link href="#pricing" id="nav_main_link" activeclassName='active'>Pricing</Nav.Link></p>
            <p id="nav_links"><Nav.Link href="#testimonials" id="nav_main_link" activeclassName='active'>About</Nav.Link></p>
            <p id="nav_links"><Nav.Link href="#contact" id="nav_main_link" activeclassName='active'>Contact</Nav.Link></p>
            <div id="search">
              <div id="search_input">
                <input type="text" placeholder="Your Email" />
              </div>
              <div id="search_button">
                <button>Subsribe</button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navbars;
