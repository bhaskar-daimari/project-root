import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../Auth/LogoutButton';

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No auth token found, please login again.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(res.data);
      } catch (err) {
        console.error('Failed to fetch profile data', err);
        setError(err.response?.data?.msg || 'Failed to fetch profile data');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profile</h1>
      <pre>{JSON.stringify(profileData, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
}
