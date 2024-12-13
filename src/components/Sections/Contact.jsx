import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/tele-phone.png";
import ContactImg2 from "../../assets/img/sahil-com.png";
import ContactImg3 from "../../assets/img/sahil-linkedin.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Let's connect on developers profile as you already came this far connect with me using below provided links
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 flex" style={{ justifyContent:'space-between', flexWrap:'wrap'}}>
                







            







            <ContactImgBox>
            <a href= "mailto: 01patelsahil@gmail.com"> 
            <i className="fa-solid fa-envelope fa-5x"></i>
            
            </a>
            <h2>Mail Me</h2>
            </ContactImgBox>
            
            <ContactImgBox>
            <a href="https://www.linkedin.com/in/patel-sahil-301858160/">
            <i className="fa-brands fa-linkedin fa-5x"></i>
            </a>
            <h2>linkedin</h2>
            </ContactImgBox>
            
            <ContactImgBox>
            <a href= "https://github.com/SAHIL8569"> 
            <i className="fa-brands fa-github fa-5x"></i>
            
            </a>
            <h2>GitHub</h2>
            </ContactImgBox>

            <ContactImgBox>
            <a href="https://sahilpatel21.wordpress.com/">
            <i className="fa-brands fa-wordpress fa-5x"></i>
            
            </a>
            <h2>wordpress</h2>
            </ContactImgBox>
            
            <ContactImgBox>
            <a href="https://www.threads.net/@_sahil_2101_">
            <i className="fa-brands fa-threads fa-5x"></i>
            
            </a>
            <h2>linkedin</h2>
            </ContactImgBox>
            
            <ContactImgBox>
            <a href="https://www.facebook.com/profile.php?id=100095272063985">
            <i className="fa-brands fa-facebook fa-5x"></i>
            
            </a>
            <h2>linkedin</h2>
            </ContactImgBox>
            
            <ContactImgBox>
            <a href= "https://www.instagram.com/_sahil_2101_/"> 
            <i className="fa-brands fa-instagram fa-5x"></i>
            
            </a>
            <h2>Instagram</h2>
            </ContactImgBox>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #3b448b;
  background-color: #3b448b;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #3b448b;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin-bottom: 70px;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









