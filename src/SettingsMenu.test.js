import React from "react";
import ReactDOM from "react-dom";
import SettingsMenu from "./SettingsMenu";

it("SettingsMenu renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SettingsMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
