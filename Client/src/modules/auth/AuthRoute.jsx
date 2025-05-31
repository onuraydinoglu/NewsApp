import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "./services/authService";

const AuthRoute = ({ children }) => {
  return isAdminAuthenticated() ? children : <Navigate to="/admin-login" />;
};

export default AuthRoute;
