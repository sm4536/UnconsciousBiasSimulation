import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import CreateProfile from "./components/createProfile/createProfile";
import ViewProfile from "./components/viewProfile/viewProfile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <ViewProfile />
      </Route>
      <Route exact path="/home">
        <ViewProfile />
      </Route>
      <Route path="/createProfile">
        <CreateProfile />
      </Route>
      <Route path="/viewProfile">
        <ViewProfile />
      </Route>
    </div>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
