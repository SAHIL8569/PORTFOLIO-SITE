import React from "react";
import styled from "styled-components";

export default function ProjectBox({ title, text}){
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer">
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}  

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  padding:10px;
  border-radius:20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;