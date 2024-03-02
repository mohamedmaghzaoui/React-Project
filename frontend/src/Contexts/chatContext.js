//ChatContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chattitle, setChattitle] = useState("");
  const [loading, setLoading] = useState(true);
  const getChatData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get_chats");
      setChattitle(response.data.chattitle);
      setLoading(false);
    } catch (error) {
      setChattitle("");
      setLoading(false);
    }
  };
  useEffect(() => {
    getChatData();
  }, []); 
  return (
    <ChatContext.Provider value={{ GetChat: getChatData, chattitle, setChattitle }}>
      {!loading && children}
    </ChatContext.Provider>
  );
};
