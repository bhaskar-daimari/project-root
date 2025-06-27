
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountNav from './AccountNav';
import AccountInfoForm from './AccountInfoForm';
import LoginInfo from './LoginInfo';
import MyOrders from './MyOrders';

export default function MyAccount() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('My Account');

  return (
    <div className="account-container">
      {/* Back to Home button */}
      <div className="back-link" style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "#555",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ← Back to Home
        </button>
      </div>

      <AccountNav onTabChange={setActiveTab} />

      <main className="account-main">
        {activeTab === 'My Account' && (
          <>
            <h2>Account</h2>
            <p className="account-subtext">View and edit your personal info below.</p>
            <hr className="divider" />
            <AccountInfoForm />
            <LoginInfo />
          </>
        )}
        {activeTab === 'My Orders' && <MyOrders />}
      </main>
    </div>
  );
}
