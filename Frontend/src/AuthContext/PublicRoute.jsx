
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children }) => {

  const { loading } = useAuth();

  const token =
  localStorage.getItem("token");

  if (loading) return null;

  return token
    ? <Navigate to="/welcome" />
    : children;

};

export default PublicRoute;