import React, { useState, useEffect , useContext } from "react";
import { ChatForm } from "./components/chatForm";
import { ChatContext } from "../../Contexts/chatContext";
import { useForm } from "react-hook-form";
import { Modal, Button, Form, Card } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
 
const ChatList = () => {
  const { GetChat, chattitle, } = useContext(ChatContext) || {};
 const { isCloseNewChat, setIsCloseNewChat}= useState(false);
 const [isOpenNewChat, setIsOpenNewChat] = useState(false);
  return (
    <div className="container item-center">
      <h2>Chat</h2>
     <p>Chattitle: {chattitle}</p>
     <button
          className="btn btn-primary"
          //hide form
          onClick={() => setIsOpenNewChat(true)}
        >
          new Chat
        </button>
        <ChatForm openNewChat={isOpenNewChat} />
  <div className="container">
 <button onClick={GetChat}>Get Chat</button>
      
      </div>

      
    </div>
  );
}
export default ChatList;

