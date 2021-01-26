import React, { Component } from "react";
import "./App.css";
import Content from "./component/Content";
import Navbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
