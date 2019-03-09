import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "./Grid";
import { BrowserRouter as Router } from "react-router-dom";
import ShallowRenderer from "react-test-renderer/shallow";

it("Grid renders without crashing", () => {
  const div = document.createElement("div");
  const gifs = [
    {
      id: "dwefsrd",
      images: { fixed_height: { url: "/" } }
    },
    {
      id: "dwefsdrsrd",
      images: { fixed_height: { url: "/" } }
    }
  ];
  ReactDOM.render(
    <Router>
      <Grid gifs={gifs} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
