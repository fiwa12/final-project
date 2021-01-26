import React, { Component } from "react";
import "./style/Content.css";

class Thumbnail extends Component {
  render() {
    return (
      <div className="post-thumbnail">
        <br />
        <div className="post-img-text">
          <div className="post-img">
            <img src={this.props.imageExample} alt="" />
          </div>
          <div className="post-info">
            <div className="post-text">
                <p>{this.props.postText}</p>
            </div>
            <div className="post-user">
                <img src="./images/user.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
