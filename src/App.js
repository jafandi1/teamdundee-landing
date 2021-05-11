import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// pages
import LandingPg from "./LandingPg.js";


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPg} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
