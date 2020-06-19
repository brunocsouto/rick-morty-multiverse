import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home';
import Characters from "./pages/Characters";
import DetailCharacter from './pages/DetailCharacter'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/characters/:id" component={DetailCharacter} />
    </BrowserRouter>
  );
};

export default Routes;
