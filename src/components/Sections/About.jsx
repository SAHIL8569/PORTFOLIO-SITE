import React from "react";
import styled from "styled-components";

import FullButton from "../Buttons/FullButton";

import AddImage2 from "../../assets/img/sahil-three.jpg";

export default function About() {

    return(
        
        <Wrapper id="About">
            <div className="lightBg">
                <div className="container">
                  <Advertising className="flexSpaceCenter">
                    <AddRight>
                      <h4 className="font15 semiBold">A few words about Me</h4>
                      <h2 className="font40 extraBold">An Enthusiast of Revolution</h2>
                      <p className="font12">
                      Over the past ten years, my deep engagement in the IT sector has grown, and as my fascination with artificial intelligence and machine learning deepens, these areas are revolutionizing how I perceive technology and its applications.
                      Driven by a persistent pursuit of these advanced technologies, which keeps me at the forefront of the dynamic tech industry, my career is geared towards continuous innovation.
                      Committed to elevating operational efficiency, I adopt novel techniques and technologies, and I am crafting tailored and imaginative solutions that meet the intricate needs of today’s IT environments.
                      </p>
                      <ButtonsRow style={{ margin: "30px 0" }}>
                        <div style={{ width: "190px" }}>
                          <a href="#contact" ><FullButton title="Get Started" /></a>
                        </div>
                      </ButtonsRow>
                    </AddRight>
                    <AddLeft>
                    <AddLeftInner>
                      <ImgWrapper className="flexCenter">
                        <img className="radius8" src={AddImage2} alt="add" />
                      </ImgWrapper>
                    </AddLeftInner>
                  </AddLeft>
                  </Advertising>
                </div>
            </div>
        </Wrapper>
    )

}
const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
