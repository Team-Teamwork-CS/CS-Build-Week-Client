import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/home/home.js"
import Inventory from "./Components/home/inventory.js"

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <Home />
      <Inventory />
    </div>
  );
}

export default App;
