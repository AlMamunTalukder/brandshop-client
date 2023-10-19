/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateHook = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate to="/signIn" replace></Navigate>;
};

export default PrivateHook;
