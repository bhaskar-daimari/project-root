
import React, { useState } from 'react';

export default function BillingForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <form className="billing-form" onSubmit={handleSubmit}>
      <h3>Billing Information</h3>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <button type="submit">Place Order</button>
    </form>
  );
}
