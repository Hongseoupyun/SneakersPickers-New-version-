import React, { useEffect, useState } from "react";
import "./Mymessages.scss";
import { GrSend } from "react-icons/gr";
import Conversation from "./Conversation";
import Message from "./Message";
import axios from "axios";

export default function Mymessages() {
  const [conversations, setConversations] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [text, setText] = useState("");

  //loads accepted offers as a conversation
  const loadConversation = async function () {
    try {
      const result = await axios.get("/api/offerlist/conversation");
      setConversations(result.data);
      console.log(result.data);
      setSelectedId(result.data[0].offerid);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("conversation selected=>", selectedId);

  const loadMessages = async function () {
    try {
      const result = await axios.get("/api/messages",{selectedId});
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const submitText = function () {
    return axios.post("api/messages", { text ,selectedId });
  };

  useEffect(() => {
    loadConversation();
    loadMessages()
  }, []);

  useEffect(()=>{
    loadMessages();
  },[selectedId])

  //passes props
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="chat-submit-button" onClick={submitText}>
              <GrSend className="submit-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
