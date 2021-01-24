import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import TagFilterBar from "./component/TagFilterBar";

class App extends Component {
  render() {
    return (
      <div>
        <TagFilterBar />
      </div>
    );
  }
}

export default App;
