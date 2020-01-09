import React, { useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/home/home.js";
// import Inventory from "./Components/home/inventory.js";

import World from "./features/world";
import Dialog from "./Components/Dialog/Dialog";
import Inventory from "./Components/Inventory/Inventory";

const Container = () => {
  return (
    <div className="gameContainer" style={{ maxWidth: 1400, margin: "auto" }}>
      <World />
      <Dialog />
      <Inventory />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={props => <SignIn history={props.history} />}
        />
        <Route
          exact
          path="/signin"
          render={props => <SignIn history={props.history} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <SignUp history={props.history} />}
        />
        <ProtectedRoute exact path="/game" component={Container} />
      </Router>
    </div>
  );
}

export default App;
