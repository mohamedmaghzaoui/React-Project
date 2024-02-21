import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get_user");

      setUsername(response.data.username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [username]); // The empty dependency array means this effect runs once after the initial render

  // Define any additional state or functions related to the user context here
  console.log(document.cookie);
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
