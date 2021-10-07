import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

import Asia from "./pages/Asia.js";
import America from "./pages/America.js";
import Europe from "./pages/Europe.js";
import Joinus from "./pages/Joinus.js";
import Gallery from "./pages/Gallery.js";

import { AuthProvider } from "./contexts/Authcontext";
const routing = (
  <div>
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Joinus" exact component={Joinus} />
          <Route path="/Gallery" exact component={Gallery} />

          <Route path="/Asia" component={Asia} />

          <Route path="/America" component={America} />

          <Route path="/Europe" component={Europe} />
        </Switch>
      </AuthProvider>
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));
