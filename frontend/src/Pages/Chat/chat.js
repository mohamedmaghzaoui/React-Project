import React, { useState, useEffect , useContext } from "react";
import { ChatForm } from "./components/chatForm";
import { ChatContext } from "../../Contexts/chatContext";
import { useForm } from "react-hook-form";
import { Modal, Button, Form, Card } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const ChatList = () => {
  const { GetChat, chattitle, setChattitle } = useContext(ChatContext);
  
  return (
    <div>
      <h2>Chat</h2>
     <p>Chattitle: {chattitle}</p>
      <button onClick={GetChat}>Get Chat</button>
      <ChatForm />
    </div>
  );
}
export default ChatList;

