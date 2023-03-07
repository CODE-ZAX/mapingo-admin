import { Navigate } from "react-router-dom";

const LoginProtectedRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
export default LoginProtectedRoute;
