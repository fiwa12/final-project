import React, { Component } from "react";
import "./App.css";
import Content from "./component/Content";
import Navbar from "./component/Navbar";
import TagFilterBar from "./component/TagFilterBar";

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
