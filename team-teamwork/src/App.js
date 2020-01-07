import React from "react";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/home/home.js";
// import Inventory from "./Components/home/inventory.js";

import World from "./features/world";

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp />
      <Home />
      <Inventory /> */}
      <div>
        <World />
      </div>
    </div>
  );
}

export default App;
