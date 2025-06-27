
import React from 'react';
import BillingForm from './BillingForm';
import OrderSummary from './OrderSummary';
import './Checkout.css';

export default function Checkout() {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-wrapper">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
}
