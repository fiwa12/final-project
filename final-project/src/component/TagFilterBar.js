import React, { Component } from "react";
import "./../style/TagFilterBar.css";
import ChipsItem from "./ChipsItem";
import $ from "jquery";

class TagFilterBar extends Component {
  render() {
    return (
      <div className="tag-filter-bar">
        <div className="arrow arrow-previous">
          <img className="arrow-icon" src="./icons/arrow-previous.svg" alt="" />
        </div>
        <div className="chips-wrapper" id="chips-wrapper">
          <ul className="chips-list">
            <li className="chips-item">
              <ChipsItem tagLable="All" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="First Tag Is The Finest" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Second Tag Scores!" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Third Tag Beat The Thrust" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Fourth Tag is Fabulous" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Fifith Tag is Frothing" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Sixth Tag Sees No Boundries" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Seventh Tag Saves The World" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Eighth Tag Ain't Nothing But Bang" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Nineth Tag Knows What's Up" />
            </li>
            <li className="chips-item">
              <ChipsItem tagLable="Tenth Tag will Eat You Up" />
            </li>
          </ul>
        </div>
        <div className="arrow arrow-next">
          <img className="arrow-icon" src="./../icons/arrow-next.svg" alt="" />
        </div>
      </div>
    );
  }
}

export default TagFilterBar;
