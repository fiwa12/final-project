import React, { Component } from "react";
import "./App.css";
import TagFilterBar from "./component/TagFilterBar";
import Content from "./component/Content";
import Navbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TagFilterBar />
        <Content />
      </div>
    );
  }
}

export default App;
