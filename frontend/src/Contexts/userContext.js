import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
//create a context to share data to all components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //globar username and userroles states
  const [username, setUsername] = useState("");
  const [userRoles, setUserRoles] = useState("");
  //get user from symfony if authenticated
  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get_user");

      setUsername(response.data.username);
      setUserRoles(response.data.role);
    } catch (error) {}
  };
  //useeffect to re render when username changes
  useEffect(() => {
    getUserData();
  }, [username]); // The empty dependency array means this effect runs once after the initial render

  return (
    //share data with chilfren components using usercontext
    <UserContext.Provider value={{ username, setUsername, userRoles }}>
      {children}
    </UserContext.Provider>
  );
};
