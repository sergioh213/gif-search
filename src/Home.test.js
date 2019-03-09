import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import ShallowRenderer from "react-test-renderer/shallow";

it("Home renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Home />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
