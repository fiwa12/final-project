import React, { Component } from "react";
import "./../style/TagFilterBar.css";

export class ChipsItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.tagLable}</p>
      </div>
    );
  }
}

export default ChipsItem;
