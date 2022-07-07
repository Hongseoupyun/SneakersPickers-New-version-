import React from "react";
import "./Conversation.scss";
import testimg from "../images/aboutus-img3.jpeg";


export default function Conversation(props) {

  const { img, name } = props

  // const handleClick () {

  // }

  return (
    <div className="conversation" >
      <img className="conversation-img" src={img} alt="conversation-img" />
      <div className="conversation-online-badge"></div>
      <span className="conversation-name">{name}</span>
    </div>
  );
}
