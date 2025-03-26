import React from "react";
import { FaTimes, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Cart = ({ isOpen, closeCart, items, removeItem, updateQuantity }) => {
  // Calculate cart total
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50"
        onClick={closeCart}
      />

      {/* Cart panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-dark-gray z-50 shadow-xl overflow-hidden flex flex-col">
        {/* Cart header */}
        <div className="px-6 py-5 border-b border-light-gray/20 flex justify-between items-center">
          <h3 className="text-xl font-bold">Your Cart ({items.length})</h3>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-light-gray/20 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <svg
                className="w-20 h-20 text-light-gray/40 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h4 className="text-lg font-medium mb-2">Your cart is empty</h4>
              <p className="text-gray-400 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2 bg-accent hover:bg-accent-light transition-colors rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-light-gray/20 px-6">
              {items.map((item) => (
                <li key={item.id} className="py-4 flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-medium-gray">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium mb-1 truncate">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">${item.price}</p>

                    {/* Quantity control */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 bg-medium-gray hover:bg-light-gray/50 rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={12} />
                      </button>

                      <span className="w-8 text-center">{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 bg-medium-gray hover:bg-light-gray/50 rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Price and remove button */}
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart footer */}
        {items.length > 0 && (
          <div className="border-t border-light-gray/20 p-6">
            {/* Cart summary */}
            <div className="mb-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-light-gray/20">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout button */}
            <button className="w-full btn-primary mb-3">
              Proceed to Checkout
            </button>

            <button
              onClick={closeCart}
              className="w-full px-6 py-3 border border-light-gray/30 text-white font-medium rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
