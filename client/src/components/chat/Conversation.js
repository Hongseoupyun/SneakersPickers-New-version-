import React from "react";
import "./Conversation.scss";
import testimg from "../images/aboutus-img3.jpeg";
import axios from "axios"

export default function Conversation() {

  const loadOffer = function () {
    axios.get("/api/offerlist/conversation")
    .then((result)=>{
      console.log(result)
    })
  }

  // const handleClick () {

  // }

  return (
    <div className="conversation" onClick={loadOffer}>
      <img className="conversation-img" src={testimg} alt="conversation-img" />
      <div className="conversation-online-badge"></div>
      <span className="conversation-name">Air Jordan 1</span>
    </div>
  );
}
