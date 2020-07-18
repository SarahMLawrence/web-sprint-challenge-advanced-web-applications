import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import AddColor from "./components/AddColor";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav" style={{width: '50%'}}>
        <Link to="/" style={{ textDecoration: 'none', marginRight: '5%'}} >Login</Link>
        <Link to="/protected" style={{ textDecoration: 'none' }}>Bubble Page</Link>
        <Link to="/addColor" style={{ textDecoration: 'none', marginLeft: '5%'}}>Add New Color</Link>
</div>
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <PrivateRoute exact path="/addColor" component={AddColor}/>
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
