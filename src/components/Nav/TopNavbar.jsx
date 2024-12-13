import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets

import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
        <UlWrapper className="flexNullCenter">
        <li className="semiBold font15 pointer">
          <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
              Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
        <Link activeClass="active" style={{ padding: "10px 15px" }} to="About" spy={true} smooth={true} offset={-80}>
            About
        </Link>
      </li>
        <li className="semiBold font15 pointer">
          <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
            Resume
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link activeClass="active" style={{ padding: "10px 15px" }} to="Projects" spy={true} smooth={true} offset={-80}>
            Portfolio
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
            Contact
          </Link>
        </li>
      </UlWrapper>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <Link className="pointer flexNullCenter" to="home" smooth={true}> 
          <h1 style={{ marginRight: "px", fontSize:'30px'}} className="font20 extraBold">
            Sahil Patel
          </h1> 
          </Link>

          <UlWrapperRight className="flexNullCenter">
             <a href= "mailto: 01patelsahil@gmail.com" target="_blank"> <i className="fa-solid fa-envelope"></i></a>
             <a href= "https://www.linkedin.com/in/patel-sahil-301858160/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
             <a href= "https://github.com/SAHIL8569" target="_blank"><i className="fa-brands fa-github"></i></a>
             <a href= "https://www.threads.net/@_sahil_2101_" target="_blank"><i class="fa-brands fa-threads"></i></a>
             <a href= "https://sahilpatel21.wordpress.com/" target="_blank"><i class="fa-brands fa-wordpress"></i></a>
             <a href= "https://www.facebook.com/profile.php?id=100095272063985" target="_blank"><i class="fa-brands fa-facebook"></i></a>
             <a href= "https://www.instagram.com/_sahil_2101_/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


