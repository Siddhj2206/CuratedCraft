import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Chatbot from "./components/Chatbot";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const location = useLocation();

  // Handle cart toggle
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Handle chatbot toggle
  const toggleChatbot = () => setIsChatbotOpen(!isChatbotOpen);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  // Close cart when changing pages
  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-accent to-accent-light opacity-20 blur-3xl rounded-full w-[500px] h-[500px] fixed -top-[150px] -left-[150px] z-[-1]"></div>

      <Navbar
        toggleCart={toggleCart}
        cartItemsCount={cartItems.reduce(
          (total, item) => total + item.quantity,
          0,
        )}
        toggleChatbot={toggleChatbot}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />

      {/* Cart overlay */}
      <Cart
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        items={cartItems}
        removeItem={removeFromCart}
        updateQuantity={updateQuantity}
      />

      {/* Chatbot */}
      <Chatbot
        isOpen={isChatbotOpen}
        closeChat={() => setIsChatbotOpen(false)}
      />
    </div>
  );
}

export default App;
