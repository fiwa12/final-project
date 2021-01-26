import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "./style/Content.css";

class Content extends Component {
  render() {
    return (
      <div className="post-container mt-5">
        <Thumbnail imageExample="./images/Content/1.jpg" postText="ABNSC" />
        <Thumbnail
          imageExample="./images/Content/2.jpg"
          postText="fdadfadfasdf"
        />
        <Thumbnail
          imageExample="./images/Content/3.jpg"
          postText="Aadsasdfaasdsafadfdsdfasdf"
        />
        <Thumbnail imageExample="./images/Content/4.jpg" postText="AasdsdSC" />
        <Thumbnail
          imageExample="./images/Content/5.jpg"
          postText="ABdsdsdsdsdSC"
        />
        <Thumbnail imageExample="./images/Content/6.jpg" postText="AsdfsdSC" />
        <Thumbnail imageExample="./images/Content/7.jpg" postText="ABdsdNSC" />
        <Thumbnail
          imageExample="./images/Content/8.jpg"
          postText="ABsdfsdNSC"
        />
        <Thumbnail imageExample="./images/Content/9.jpg" postText="ABNsdsdSC" />
        <Thumbnail
          imageExample="./images/Content/10.jpg"
          postText="ABNsdsdSC"
        />
        <Thumbnail
          imageExample="./images/Content/11.jpg"
          postText="ABNsdsdSC"
        />
        <Thumbnail
          imageExample="./images/Content/12.jpg"
          postText="ABNsdsdSC"
        />
        <Thumbnail
          imageExample="./images/Content/13.jpg"
          postText="ABNsdsdSC"
        />
        <Thumbnail
          imageExample="./images/Content/14.jpg"
          postText="ABNsdsdSC"
        />
        <Thumbnail
          imageExample="./images/Content/15.jpg"
          postText="ABNsdsdSC"
        />
      </div>
    );
  }
}

export default Content;
