import React from 'react';
import Select from 'react-select';

const ProductSelect = ({ products, selectedProduct, onProductChange }) => {
  const options = products.map(product => ({
    value: product.id,
    label: product.name,
  }));

  return (
    <Select
      value={options.find(option => option.value === selectedProduct)}
      onChange={onProductChange}
      options={options}
    />
  );
};

export default ProductSelect;
