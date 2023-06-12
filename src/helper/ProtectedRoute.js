import { Navigate } from "react-router";
export const ProtectedRoute = ({ children, isAdmin }) => {
  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};
