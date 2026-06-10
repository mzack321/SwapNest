
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading) return null;

//   return user ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {

  const { loading } = useAuth();

  const token =
  localStorage.getItem("token");

  if (loading) return null;

  return token
    ? children
    : <Navigate to="/login" />;

};

export default ProtectedRoute;