import React from "react";
import "./Mymessages.scss";
import { GrSend } from "react-icons/gr"
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
            <Message own={true}/>
            <Message/> 
            <Message own={true}/>
            <Message/>
            <Message own={true}/>
            <Message/>
          </div>
          <div className="chat-box-bottom">
            <textarea className="chat-message-input" placeholder="Type a message"></textarea>
            <button className="chat-submit-button"><GrSend className="submit-icon"/></button>
          </div>
        </div>

      </div>
    </div>
  );
}
