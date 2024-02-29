// UserContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userRoles, setUserRoles] = useState("");
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get_user");
      setUsername(response.data.username);
      setUserRoles(response.data.role);
      setLoading(false);
    } catch (error) {
      setUsername("");
      setUserRoles("");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [username]); // The empty dependency array means this effect runs once after the initial render

  return (
    <UserContext.Provider value={{ username, setUsername, userRoles }}>
      {!loading && children}
    </UserContext.Provider>
  );
};
