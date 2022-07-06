import React from "react";
import "./Message.scss";
import testimg from "../images/aboutus-img3.jpeg";

export default function Message({own}) {
  return (
    <div className={own? "message own" : "message"}>
      <div className="message-top">
        <img className="message-img" src={testimg} alt="message-img" />
        <p className="message-text">Hello! This is message lajflkajlfkjl</p>
      </div>
      <div className="message-bottom">1hour ago</div>
    </div>
  );
}
