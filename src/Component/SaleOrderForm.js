import React, { useState } from 'react';
import ProductSelect from './ProductSelect';
import './SaleOrderForm.css';

const SaleOrderForm = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');

  const products = [
    { id: 1, name: 'Product 5' },
    { id: 2, name: 'Stocked Product I' },
    { id: 3, name: 'Benoit Saint Denis' },
    { id: 4, name: 'Anonymous Product' },
    { id: 5, name: 'Stocked Tea I' },
    { id: 6, name: 'Stocked Tea II' },
    
  ];

  const handleProductChange = (selectedOption) => {
    setSelectedProduct(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className="sale-order-form">
      <h1>Sale Order Form</h1>
      <div className="form-group">
        <label htmlFor="product-select">All Products *</label>
        <ProductSelect
          products={products}
          selectedProduct={selectedProduct}
          onProductChange={handleProductChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="selling-rate">Selling Rate</label>
        <input
          type="number"
          id="selling-rate"
          value={rate}
          onChange={e => setRate(e.target.value)}
          placeholder="Enter selling rate"
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          placeholder="Enter quantity"
        />
      </div>
      <div className="remaining-items">
        <p>{selectedProduct ? `${quantity} Item(s) Remaining` : ''}</p>
      </div>
    </div>
  );
};

export default SaleOrderForm;
