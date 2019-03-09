import React from "react";
import ReactDOM from "react-dom";
import GifPage from "./GifPage";
import { BrowserRouter as Router } from "react-router-dom";

it("GifPage renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
    params: { id: "dwefsrd" }
  };
  ReactDOM.render(
    <Router>
      <GifPage match={props} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
