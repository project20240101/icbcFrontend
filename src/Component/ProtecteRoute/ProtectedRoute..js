import React from 'react';
import { navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 // Replace with your logic to check user authentication state
  const Navigate = useNavigate();
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Render children if authenticated
  return children;
};

export default ProtectedRoute;