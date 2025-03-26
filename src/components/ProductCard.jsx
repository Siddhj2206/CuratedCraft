import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-sm">{product.description}</p>
      <div className="mt-2 font-bold">${product.price}</div>
      <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-gray-800 transition">Add to Cart</button>
    </div>
  );
};

export default ProductCard;