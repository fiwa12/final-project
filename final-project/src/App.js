import React, { Component } from "react";
import "./App.css";
// import ChipsItem from "./component/ChipsItem";
// import HorizontalScrollMenu from "./component/HorizontalScrollMenu";
import Content from "./component/Content";
// import Navbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <HorizontalScrollMenu /> */}
        {/* <ChipsItem /> */}
        <Content />
      </div>
    );
  }
}

export default App;
