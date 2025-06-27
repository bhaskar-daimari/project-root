
import React, { useState } from 'react';
import './MyAccount.css';

export default function AccountNav({ onTabChange }) {
  const tabs = ['My Account', 'My Orders'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); // Callback to parent component
  };

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${tab === activeTab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
