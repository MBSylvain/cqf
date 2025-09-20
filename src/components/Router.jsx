import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Princing from "../pages/Princing";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path="/Services" component={Services} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Princing" component={Princing} />
    </Switch>
  </Router>
);

export default AppRouter;
