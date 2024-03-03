import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import { Navigate } from "react-router-dom";

// get element and role as parameters
export const PrivateRoute = ({ element, allowRoles }) => {
  const { userRoles } = useContext(UserContext); // get user role array from context hook

  // if userRoles don't contain the allowRoles, navigate to the home page
  if (!userRoles || !userRoles.some((role) => allowRoles.includes(role))) {
    // Redirect to home page
    return <Navigate to="/" />;
  }

  // else return the element
  return element;
};
