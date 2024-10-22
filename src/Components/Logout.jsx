import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate clearing session or local storage (if used)
    localStorage.removeItem('authToken'); // Example: clearing a token, if you're using one

    // Redirect to the login page after logout
    alert("Logged out");
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold">Logging out...</h1>
    </div>
  );
};

export default Logout;
