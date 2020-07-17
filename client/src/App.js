import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Login</Link>
        <Link to="/protected">Bubble Page</Link>

        <Switch>
          <PrivateRoute exact path="/" component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
