import React from "react";
import styled from "styled-components";
import axios from 'axios';

import { useState, useEffect } from "react";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";


export default function Projects() {

  const [sahilData, setsahilDeta] = useState([]);


  useEffect(() => { 
    // console.log("Hello");
    axios.get('https://api.github.com/users/SAHIL8569/repos')
    .then(function (response) {
      // handle success
      console.log(response.data); 
      setsahilDeta(response.data)
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  },[])


  return (  
    <Wrapper id="Projects">
      <div className="whiteBg">
        <div className="container"> 
          <HeaderInfo>
            <h1 className="font40 extraBold">My Awesome Projects</h1>
            <p className="font13">
             Find some of my projects from the below given links 
            </p>
          </HeaderInfo>
          <div className="row textCenter">
              {sahilData.map((data)=>{
                return(
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6 ">
                  <a href={data.html_url} target="_blank">
                    <ProjectBox
                     
                      title={data.name}
                      text={data.description} 
                    />
                  </a>
              </div>
                  )
              })}
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
text-align: center;
  @media (max-width: 860px) {
    
  }
`;

