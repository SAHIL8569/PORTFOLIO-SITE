import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/sahil-top.jpg";
import QuotesIcon from "../../assets/svg/Quotes";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} width={400} />
        </ImageWrapper>
      </RightSide>
      <LeftSide className="flexCenter">
      <div>
        <h1 className="extraBold font60">Hi! I am Sahil Patel</h1>
        <HeaderP className="font13 semiBold">
        I am an aspiring full-stack developer enhancing my skills while pursuing a Master’s in Information Technology at Queensland University of Technology, specializing in software development.
        With three years of industry experience, I am currently focusing on expanding my expertise in both traditional and emerging technologies.
        The tech industry is poised at the brink of a new era dominated by AI advancements, which are set to radically transform the landscape for developers. 
        I am actively engaging with generative AI technologies to understand their potential and integrate them into practical development scenarios. 
        Although AI is still evolving, its rapid progression indicates significant, upcoming changes in how we approach software development.
        </HeaderP>
        <BtnWrapper>
        <a href="#contact" ><FullButton title="Get Started" /></a>
        </BtnWrapper>
      </div>
    </LeftSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;