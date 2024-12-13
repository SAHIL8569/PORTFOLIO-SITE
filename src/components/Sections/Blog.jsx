import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

import Blogone from "../../assets/img/blog-1.webp";


export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a href="https://tomicriedel.medium.com/6c4545f2cfac" target="_blank">
              <BlogBox
                imgs={Blogone}
                title="Flutter and Dart at Google Cloud Next"
                text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <a href="https://tomicriedel.medium.com/6c4545f2cfac" target="_blank">
              <BlogBox
                imgs={Blogone}
                title="Flutter and Dart at Google Cloud Next"
                text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <a href="https://tomicriedel.medium.com/6c4545f2cfac" target="_blank">
              <BlogBox
                imgs={Blogone}
                title="Flutter and Dart at Google Cloud Next"
                text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
              </a>
            </div>
          </div>
          <div className="row textCenter" style={{ margin: "50px 0" }}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a href="https://tomicriedel.medium.com/6c4545f2cfac" target="_blank">
              <BlogBox
                imgs={Blogone}
                title="Flutter and Dart at Google Cloud Next"
                text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <a href="https://tomicriedel.medium.com/6c4545f2cfac" target="_blank">
            <BlogBox
              imgs={Blogone}
              title="Flutter and Dart at Google Cloud Next"
              text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
              tag="company"
              author="Luke Skywalker, 2 days ago"
            />
            </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <a href="https://tomicriedel.medium.com/6c4545f2cfac" target="_blank">
            <BlogBox
              imgs={Blogone}
              title="Flutter and Dart at Google Cloud Next"
              text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
              tag="company"
              author="Luke Skywalker, 2 days ago"
            />
            </a>
            </div>
          </div>

        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;