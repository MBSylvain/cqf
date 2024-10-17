import React from "react";
import { Router, Route } from "react-router-dom";
const Router = () =>
<Router>
  <Switch>
    <Route exact path="src/pages/Home.jsx" component={Home} />
    <Route path="src/pages/Services.js" component={Services} />
    <Route path="src/pages/Gallery.jsx" component={Gallery} />
    <Route path="src/pages/Contact.jsx" component={Contact} />
  </Switch>
</Router>;
