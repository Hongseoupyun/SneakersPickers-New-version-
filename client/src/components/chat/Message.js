import React from "react";
import "./Message.scss";
import testimg from "../images/aboutus-img3.jpeg";

export default function Message() {
  return (
    <div className="message">
      <div className="message-top">
        <img className="message-img" src={testimg} alt="message-img" />
        <p>Hello! </p>
      </div>
      <div className="message-bottom">1hour ago</div>
    </div>
  );
}
