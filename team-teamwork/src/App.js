import React from "react";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/home/home.js";
// import Inventory from "./Components/home/inventory.js";

import World from "./features/world";
import Dialog from "./Components/Dialog/Dialog";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <Home />
      <Inventory />
      <div className="gameContainer" style={{ maxWidth: 1400, margin: "auto" }}>
      <World />
      <Dialog />
      <Inventory />
      </div>
    </div>
  );
}

export default App;
