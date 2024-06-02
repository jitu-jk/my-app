import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import SaleOrderForm from './SaleOrderForm';
import './SalesOrder.css'; 

const SalesOrders = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showForm, setShowForm] = useState(false);

  const salesOrders = {
    active: [
      { id: 1, name: 'Spider', orderId: 'apj2000', price: '₹ 100', date: '24/5/2024', time: '11:07 PM' },
      { id: 2, name: 'Spider', orderId: 'apj2000', price: '₹ 210', date: '24/5/2024', time: '11:30 PM' },
    ],
    completed: [
      { id: 3, name: 'Batman', orderId: 'apj2001', price: '₹ 500', date: '22/5/2024', time: '10:15 PM' },
      { id: 4, name: 'Superman', orderId: 'apj2002', price: '₹ 700', date: '21/5/2024', time: '09:45 PM' },
    ],
  };

  return (
    <div className="sales-orders">
      <div className="buttons">
        <button 
          className={`button ${activeTab === 'active' ? 'active' : ''}`} 
          onClick={() => setActiveTab('active')}
        >
          Active Sale Orders
        </button>
        <button 
          className={`button ${activeTab === 'completed' ? 'active' : ''}`} 
          onClick={() => setActiveTab('completed')}
        >
          Completed Sale Orders
        </button>
        <button className="button new-order" onClick={() => setShowForm(true)}>+ Sale Order</button>
      </div>
      {showForm ? (
        <SaleOrderForm />
      ) : (
        <table className="sales-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Price (₹)</th>
              <th>Last Modified</th>
              <th>Edit/View</th>
            </tr>
          </thead>
          <tbody>
            {salesOrders[activeTab].map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  <FaUserCircle className="user-icon" />
                  {order.name}
                  <span className="order-id">{order.orderId}</span>
                </td>
                <td>{order.price}</td>
                <td>{order.date} ({order.time})</td>
                <td>
                  <FiMoreHorizontal className="more-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SalesOrders;
