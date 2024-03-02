// UserContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userRoles, setUserRoles] = useState("");
  const [userProfileData, setUserProfileData] = useState("");
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get_user");
      setUsername(response.data.username);
      setUserRoles(response.data.role);
      setUserProfileData(response.data.userProfileData);

      setLoading(false);
      console.log(username);
      console.log(userProfileData);
    } catch (error) {
      setUsername("");
      setUserRoles("");
      setUserProfileData("");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [username]); // The empty dependency array means this effect runs once after the initial render

  return (
    <UserContext.Provider
      value={{ username, setUsername, userRoles, userProfileData }}
    >
      {!loading && children}
    </UserContext.Provider>
  );
};
