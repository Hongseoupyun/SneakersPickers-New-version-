import React, { useEffect, useState } from "react";
import "./Mymessages.scss";
import { GrSend } from "react-icons/gr";
import Conversation from "./Conversation";
import Message from "./Message";
import axios from "axios";

export default function Mymessages() {
  const [conversations, setConversations] = useState([]);
  const [selectedId, setSelectedId] = useState("")
  
  const loadConversation = function () {
    axios
      .get("/api/offerlist/conversation")
      .then((result) => {
        console.log(result.data);
        setConversations(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    loadConversation();
  }, []);

  console.log("conversation selected=>",selectedId)

  const conversation = conversations.map((conversation) => {
    return (
      <Conversation
        key={conversation.id}
        offerId={conversation.offerid}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        wanted_item_id={conversation.listing_offer_made_to_id}
        offered_item_id={conversation.listing_being_offered_id}
      />
    );
  });



  return (
    <div className="mymessages-body">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input placeholder="SEARCH" className="chat-menu-input"></input>
          {conversation}
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
          </div>
          <div className="chat-box-bottom">
            <textarea
              className="chat-message-input"
              placeholder="Type a message"
            ></textarea>
            <button className="chat-submit-button">
              <GrSend className="submit-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
