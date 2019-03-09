import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import GifPage from "./GifPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={GifPage} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
