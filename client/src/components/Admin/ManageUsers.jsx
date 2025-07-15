import React, { useEffect, useState } from 'react';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('user');
  const token = localStorage.getItem('token');

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      alert('Failed to load users.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add new user
  const handleAddUser = async () => {
    if (!newEmail || !newPassword) {
      alert('Email and password are required.');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: newEmail, password: newPassword, role: newRole }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.msg || 'Failed to add user'}`);
        return;
      }

      alert('User added successfully!');
      setNewEmail('');
      setNewPassword('');
      setNewRole('user');
      fetchUsers();
    } catch (err) {
      console.error('Add user error:', err);
      alert('An unexpected error occurred.');
    }
  };

  // Update user role
  const handleRoleChange = async (id, role) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.msg || 'Failed to update role'}`);
        return;
      }
      fetchUsers();
    } catch (err) {
      console.error('Update role error:', err);
      alert('An error occurred while updating role.');
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.msg || 'Failed to delete user'}`);
        return;
      }

      alert('User deleted successfully.');
      fetchUsers();
    } catch (err) {
      console.error('Delete user error:', err);
      alert('An error occurred while deleting user.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Manage Users</h2>

      <h3>Add New User</h3>
      <input
        placeholder="Email"
        value={newEmail}
        onChange={e => setNewEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />
      <select value={newRole} onChange={e => setNewRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleAddUser}>Add User</button>

      <h3>User List</h3>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.email} - Role:
            <select
              value={u.role}
              onChange={e => handleRoleChange(u._id, e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button onClick={() => handleDeleteUser(u._id)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
