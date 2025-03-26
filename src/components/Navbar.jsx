import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaCommentDots } from "react-icons/fa";

const Navbar = ({ toggleCart, cartItemsCount, toggleChatbot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-dark/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
              CuratedCrafts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-accent-light" : "text-white hover:text-accent-light"}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-accent-light" : "text-white hover:text-accent-light"}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-accent-light" : "text-white hover:text-accent-light"}`
              }
            >
              About
            </NavLink>
          </nav>

          {/* User actions */}
          <div className="flex items-center gap-4">
            {/* Chatbot button */}
            <button
              onClick={toggleChatbot}
              className="p-2 rounded-full hover:bg-light-gray/30 transition-colors"
              aria-label="Open chat"
            >
              <FaCommentDots size={20} />
            </button>

            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="p-2 rounded-full hover:bg-light-gray/30 transition-colors relative"
              aria-label="Open cart"
            >
              <FaShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-light text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-light-gray/30 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-dark/95 pt-20">
          <nav className="flex flex-col items-center gap-6 p-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-accent-light" : "text-white"}`
              }
              onClick={closeMobileMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-accent-light" : "text-white"}`
              }
              onClick={closeMobileMenu}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-accent-light" : "text-white"}`
              }
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
