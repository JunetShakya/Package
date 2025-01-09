import React from "react";

function Products({ product, isChecked, onCheckboxChange }) {
  return (
    <div className='product-card'>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        <div>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Weight: {product.weight}g</p>
        </div>
      </label>
    </div>
  );
}

export default Products;
