
import React from 'react';
import './MyAccount.css';

export default function MyOrders() {
  const orders = [
    {
      id: 'ORD-20250625-01',
      date: 'June 24, 2025',
      status: 'Delivered',
      total: '₹699.00',
      items: ['Phone Charm', 'Crochet Bracelet'],
    },
    {
      id: 'ORD-20250618-02',
      date: 'June 18, 2025',
      status: 'Shipped',
      total: '₹499.00',
      items: ['Bag Charm'],
    },
  ];

  return (
    <section className="orders-section">
      <h2>My Orders</h2>
      <p className="section-subtext">Here’s a list of your recent orders.</p>

      {orders.length === 0 ? (
        <p className="no-orders">You haven't placed any orders yet.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-card-header">
                <span className="order-id">Order #{order.id}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
              </div>

              <div className="order-info">
                <div>
                  <label>Date</label>
                  <p>{order.date}</p>
                </div>
                <div>
                  <label>Total</label>
                  <p>{order.total}</p>
                </div>
                <div>
                  <label>Items</label>
                  <p>{order.items.join(', ')}</p>
                </div>
              </div>

              <div className="order-actions">
                <button className="btn-outline">View Details</button>
                {order.status === 'Shipped' && <button className="btn-black">Track Order</button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
