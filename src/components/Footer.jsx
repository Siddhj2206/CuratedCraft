import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-gray/80 backdrop-blur-sm border-t border-light-gray/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                CuratedCrafts
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your destination for unique, handcrafted, and artisanal products
              from around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent-light transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-light transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-light transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-light transition-colors"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Become a Seller
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Home Decor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Jewelry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Art & Collectibles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent-light transition-colors"
                >
                  Vintage
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-light mt-1" />
                <span className="text-gray-300">
                  123 Craft Street, Artisan City, AC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent-light" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-light" />
                <span className="text-gray-300">support@curatedcrafts.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-gray/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CuratedCrafts. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-accent-light transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-accent-light transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-accent-light transition-colors"
            >
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
