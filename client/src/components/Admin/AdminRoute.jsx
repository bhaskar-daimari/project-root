// client/src/components/Admin/AdminRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user || user.role !== 'admin') {
    return <Navigate to="/signin" />;
  }

  return children;
}
