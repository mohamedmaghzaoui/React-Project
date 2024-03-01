import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function sendData(data) {
  axios.post('http://your-symfony-api-url.com/api/data', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function chatList({ chats, onChatClick }) {
    return (
        <div>
            <h1>Chat</h1>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onChatClick(chat.id)}>
            {chat.name}
          </li>
        ))}
      </ul>
      </div>
    );
  }

  function Chat({ chatId, messages, onMessageSubmit }) {
    const [newMessage, setNewMessage] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      onMessageSubmit(chatId, newMessage);
      setNewMessage("");
    }
    return (
      <div>
        <h2>Chat: {chatId}</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

  function addChat(chats, setChats, name) {
    const newChatId = chats.length + 1;
    const newChat = { id: newChatId, name };
    setChats([...chats, newChat]);
    return newChatId;
  }

  function addMessage(messages, setMessages, chatId, text) {
    const newMessageId = messages.length + 1;
    const newMessage = { id: newMessageId, chatId, text };
    setMessages([...messages, newMessage]);
  }

  export default chatList;