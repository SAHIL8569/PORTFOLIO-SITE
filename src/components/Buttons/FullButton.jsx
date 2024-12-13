import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${props => props.border ? "#707070" : "#307D99"};
  background-color: ${props => props.border ? "transparent" : "#599CD9"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${props => props.border ? "#707070" : "#fff"};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out;

  :hover {
    background-image: linear-gradient(120deg, #E6F1FF 0%, #B8DAFF 50%, #357ABD 100%);
    background-size: 200% 100%;
    background-position: right bottom;
    animation: hoverAnimation 1s forwards ease-in-out;

    border-color: #357ABD;
    color: #000;  /* Changes the text color to black during hover */
  }

  @keyframes hoverAnimation {
    0% {
      background-position: left bottom;
      color: #fff;  /* Initial color is white */
    }
    50% {
      background-position: center bottom;
      color: #555;  /* Mid-transition color is a lighter black to ensure visibility */
    }
    100% {
      background-position: right bottom;
      color: #000;  /* End color is black */
    }
  }
`;
