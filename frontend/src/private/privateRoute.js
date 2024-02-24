import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import { Navigate } from "react-router-dom";
//get element and role as parameter
export const PrivateRoute = ({ element, allowRole }) => {
  const { userRoles } = useContext(UserContext); //get user role array from context hook
  //if userRoles don"t contain the allowRole navigate to home page
  if (!userRoles || !userRoles.includes(allowRole)) {
    // Redirect to login
    return <Navigate to="/" />;
  }
  //else return the element
  return element;
};
