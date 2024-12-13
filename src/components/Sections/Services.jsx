import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/sahil-one.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg">
        <div className="container">
          <ClientSlider />  
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold" style={{ textAlign:"center" }}>What is my Website Development Skill</h1>
            <h2 className="font20" style={{ textAlign:"center" }}> I am proficient web developer with skills as below    </h2>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
          <ServiceBoxWrapper>
          <ServiceBox
          icon="roller"
          title="Front End Techniques"
          subtitle="Mastering technologies such as HTML5, CSS3, Bootstrap, JavaScript, and React to create visually appealing and compelling stories."/>
          </ServiceBoxWrapper>
          

          <ServiceBoxWrapper>
          <ServiceBox
          icon="monitor"
          title="Web Development"
          subtitle="Ensure your website is flawless across all devices with skills in Python Flask, Django, ASP.NET, and Node.js, focusing on responsive design."/>
          </ServiceBoxWrapper>


          <ServiceBoxWrapper>
          
          <ServiceBox
          icon="browser"
          title="Database Development"
          subtitle="Custom web development that leverages MYSQL, SQLite, MongoDB, PostgreSQL, and Oracle Database Server to align with your brand identity."
          />
          </ServiceBoxWrapper>
          

          <ServiceBoxWrapper>
          <ServiceBox
          icon="printer"
          title="Search Engine Optimization"
          subtitle="List your organization among one of the top on search engines"
          />
          
          </ServiceBoxWrapper>
          </ServiceBoxRow>
          
          </div>



        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={AddImage1} alt="office" />
                  </AddImgWrapp1>
                </div>
              </AddRightInner>
            </AddLeft>
            <AddLeft>
            <h4 className="font15 semiBold">A few words about Me</h4>
            <h2 className="font40 extraBold">A Study of Creativity</h2>
            <p className="font12">
            As an enthusiast in the IT sector, I am deeply immersed in the dynamic field of software development, with a focused trajectory towards web and mobile application development.
            My journey is enriched by a keen interest in how artificial intelligence can streamline development processes and enhance efficiencies.
            I actively explore innovative ways to integrate AI with traditional development methodologies. This passion drives me to create solutions that not only meet but exceed the modern demands of technology, making software smarter and more intuitive.
            My approach is to leverage AI not just as a tool, but as a foundational component that transforms how applications are conceived, developed, and utilized.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
              <div style={{ width: "190px" }}>
              <a href="#contact" >
              <FullButton title="Contact Me" />
              </a>
                
              </div>
            </ButtonsRow>
          </AddLeft>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 400px;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

