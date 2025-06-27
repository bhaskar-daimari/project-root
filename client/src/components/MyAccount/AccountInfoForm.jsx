
import React, { useState } from 'react';
import './MyAccount.css';

export default function AccountInfoForm() {
  const [form, setForm] = useState({
    firstName: 'Jilmil',
    lastName: '',
    phone: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="form-section">
      <h4>Personal info</h4>
      <p className="section-subtext">Update your personal information.</p>
      <div className="form-grid">
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      </div>
      <div className="form-buttons">
        <button className="btn discard">Discard</button>
        <button className="btn update">Update Info</button>
      </div>
    </section>
  );
}
