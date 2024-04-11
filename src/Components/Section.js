import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
function Section(props) {
  return (
    <Wrap bgImage= {props.backgroundImg}> 
    <Fade bottom>
      <Itemtext>
        <h1>{ props.title }</h1>
        <p>{props.description}</p>
      </Itemtext>
      </Fade>
    <Fade bottom>

      <Buttongroup>
        <Leftbn>{props.leftBtn}</Leftbn>
        {props.rightBtn && 
        <Rightbtn>{props.rightBtn}</Rightbtn>
        }
      
      </Buttongroup>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-postion: center;
  background-image: ${props =>`url("/images/${props.bgImage}")`};
  bakground-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Buttongroup = styled.div`
  margin-bottom: 80px;
  padding: 30px;
  display: flex;
  // background-color: red;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px; 
  
  `
;
const Leftbn = styled.div`
  width: 250px;
  padding: 8px 30px;
  border-radius: 5px;
  background-color: blue;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &:hover{
    background-color: rgba(255, 255, 255, 1);
  }
  
`;
const Rightbtn = styled(Leftbn)`
background-color: rgba(34, 34, 34, 0.8);
color: white;
&:hover{
  background-color: rgba(34, 34, 34, 1);
}

`;
