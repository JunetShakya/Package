import React from "react";


const Order = ({ selectedProducts }) => {
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
    <div className='md:absolute top-0 right-0 w-80 bg-gray-50 p-6 rounded-lg shadow-lg mb-8'>
      <h2 className='text-xl font-semibold mb-4'>Products Order</h2>
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
  );
};

export default Order;
