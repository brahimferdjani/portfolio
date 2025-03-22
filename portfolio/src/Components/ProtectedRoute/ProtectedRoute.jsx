import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("clicked");

  return token ? children : <Navigate to="/Welcome" />;
};

export default ProtectedRoute;
