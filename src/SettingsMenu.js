import React from "react";
import styled from "styled-components";

const BackgroundOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
const Menu = styled.div`
  position: fixed;
  background-color: #e8e8e8;
  width: 300px;
  right: 20px;
  top: 40px;
  z-index: 1;
  padding: 10px;
`;
const Label = styled.div`
  color: #377bf3;
  margin-bottom: 6px;
`;
const Input = styled.input`
  font-size: 16px;
  padding-left: 6px;
`;

function SettingsMenu(props) {
  return (
    <>
      <BackgroundOverlay onClick={props.toggleSettingsMenu} />
      <Menu>
        <Label>Max number of GIFs per search:</Label>
        <Input
          type="number"
          placeholder="Number"
          defaultValue={props.maxNumberOfResults}
          onChange={props.changeMaxNumberOfResults}
        />
      </Menu>
    </>
  );
}

export default SettingsMenu;
