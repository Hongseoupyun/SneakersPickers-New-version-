import React from "react";
import "./Conversation.scss"
import testimg from "../images/aboutus-img3.jpeg"



export default function Conversation() {
  return (
    <div className="conversation">
      <img className="conversation-img" src={testimg} alt="conversation-img" />
      <div className="conversation-online-badge"></div>
      <span className="conversation-name">Air Jordan 1</span>
    </div>
  )
}