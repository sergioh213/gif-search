import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
  text-align: center;
`;
const Letter = styled.div`
  display: inline-block;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size + "px"};
  font-weight: ${({ weight }) => weight};
`;

function Logo() {
  return (
    <Main>
      <Letter size={120} color={"#377bf3"}>
        G
      </Letter>
      <Letter size={68} color={"#e8382c"} weight={"bold"}>
        I
      </Letter>
      <Letter size={68} color={"#fbb503"} weight={"bold"}>
        F
      </Letter>
      <Letter size={96} color={"#377bf3"}>
        g
      </Letter>
      <Letter size={96} color={"#2b9f48"}>
        l
      </Letter>
      <Letter size={96} color={"#e8382c"}>
        e
      </Letter>
    </Main>
  );
}

export default Logo;
