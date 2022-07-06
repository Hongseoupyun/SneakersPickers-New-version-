import React from "react";
import "./Mymessages.scss";
import { GrSearch } from "react-icons/gr"
import Conversation from "./Conversation";
import Message from "./Message";

export default function Mymessages() {
  return (
    <div className="mymessages-body">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input placeholder="SEARCH" className="chat-menu-input"></input>
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <Message/>
            <Message/>
            <Message/> 
          </div>
          <div className="chat-box-bottom">

          </div>
        </div>

      </div>
    </div>
  );
}
