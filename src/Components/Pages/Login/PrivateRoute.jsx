import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../logic/authContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
