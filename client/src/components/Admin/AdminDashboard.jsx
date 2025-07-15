// client/src/components/Admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './adminDashboard.css'

export default function AdminDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/products">Manage Products</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/users">Manage Users</Link></li>
      </ul>
    </div>
  );
}
