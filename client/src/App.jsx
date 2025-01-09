import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Item 1", price: 10, weight: 200 },
  { id: 2, name: "Item 2", price: 100, weight: 20 },
  { id: 3, name: "Item 3", price: 30, weight: 300 },
  { id: 4, name: "Item 4", price: 20, weight: 500 },
  { id: 5, name: "Item 5", price: 30, weight: 250 },
  { id: 6, name: "Item 6", price: 40, weight: 10 },
  { id: 7, name: "Item 7", price: 200, weight: 10 },
  { id: 8, name: "Item 8", price: 120, weight: 500 },
  { id: 9, name: "Item 9", price: 130, weight: 790 },
  { id: 10, name: "Item 10", price: 20, weight: 100 },
];

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Handle checkbox toggle
  const handleCheckboxChange = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  // Calculate total price and weight
  const totalPrice = selectedProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const totalWeight = selectedProducts.reduce(
    (sum, product) => sum + product.weight,
    0
  );

  return (
    <div className='min-h-screen bg-gray-100 p-8 flex flex-col items-start'>
      {/* Order Summary - Now at Top-Left */}
      <div className=' md:absolute w-80 bg-gray-50 p-6 rounded-lg shadow-lg mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
        <ul className='mb-4'>
          {selectedProducts.map((product) => (
            <li key={product.id} className='flex justify-between'>
              <span>{product.name}</span>
              <span>
                ${product.price} - {product.weight}g
              </span>
            </li>
          ))}
        </ul>
        <div className='flex justify-between font-bold text-lg'>
          <span>Total Price:</span>
          <span>${totalPrice}</span>
        </div>
        <div className='flex justify-between font-bold text-lg mt-2'>
          <span>Total Weight:</span>
          <span>{totalWeight}g</span>
        </div>
      </div>

      <div className='w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-semibold text-center mb-6'>
          Product Selection
        </h1>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='border p-4 rounded-lg shadow-sm hover:shadow-md transition'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <input
                  type='checkbox'
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleCheckboxChange(product)}
                />
              </div>
              <p className='text-gray-600'>Price: ${product.price}</p>
              <p className='text-gray-600'>Weight: {product.weight}g</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
