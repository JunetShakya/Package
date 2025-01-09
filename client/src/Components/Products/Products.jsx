import React from "react";

function Product({ product, onOrderClick }) {
  return (
    <div className='bg-white p-5 rounded-lg shadow-lg border hover:border-gray-400 transition duration-300'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='text-center'>
          <p className='text-lg font-semibold text-gray-800'>{product.name}</p>
          <p className='text-sm text-gray-600'>Price: ${product.price}</p>
          <p className='text-sm text-gray-600'>Weight: {product.weight}g</p>
        </div>
        <button
          className='px-4 py-2 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out'
          onClick={() => onOrderClick(product)}>
          Place to Order
        </button>
      </div>
    </div>
  );
}

export default Product;
