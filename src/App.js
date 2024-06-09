import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import SalesOrders from './Component/SalesOrders';
import SaleOrderForm from './Component/SaleOrderForm';

const App = () => {
  return (
    <Router basename='my-app'>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sales-orders" element={<SalesOrders />} />
          <Route path="/sale-order-form" element={<SaleOrderForm />} /> 
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
