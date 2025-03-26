import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import {
  FaStar,
  FaShoppingCart,
  FaFilter,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

// Fetch products from dummyjson API
const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=30");
  const data = await response.json();
  return data.products;
};

// Fetch categories from dummyjson API
const fetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();

  // Ensure all categories are strings
  return Array.isArray(data) ? data.map((cat) => String(cat)) : [];
};

const Shop = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { data: products, isLoading: productsLoading } = useQuery(
    "products",
    fetchProducts,
  );
  const { data: categories, isLoading: categoriesLoading } = useQuery(
    "categories",
    fetchCategories,
  );

  // Apply filters and sorting
  useEffect(() => {
    if (!products) return;

    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term),
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (id order)
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, sortBy, searchTerm]);

  // Toggle mobile filter sidebar
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10"
    >
      <div className="container-custom">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop</h1>
          <p className="text-gray-300">
            Explore our curated selection of unique products
          </p>
        </div>

        {/* Search and filter bar for mobile */}
        <div className="flex lg:hidden items-center justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 pl-10 bg-dark-gray border border-light-gray/20 rounded-lg focus:outline-none focus:border-accent"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            )}
          </div>
          <button
            onClick={toggleFilter}
            className="flex items-center gap-2 p-3 bg-medium-gray rounded-lg"
          >
            <FaFilter /> Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 card p-6">
              <h3 className="font-bold text-xl mb-4">Filters</h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-2 px-4 pl-10 bg-dark-gray border border-light-gray/20 rounded-lg focus:outline-none focus:border-accent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                {categoriesLoading ? (
                  <div className="animate-pulse space-y-2">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <div
                        key={index}
                        className="h-6 bg-light-gray/20 rounded"
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div
                      className={`cursor-pointer hover:text-accent-light transition-colors ${selectedCategory === "all" ? "text-accent-light font-medium" : ""}`}
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </div>
                    {categories?.map((category) => (
                      <div
                        key={category}
                        className={`cursor-pointer hover:text-accent-light transition-colors ${selectedCategory === category ? "text-accent-light font-medium" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {typeof category === "string"
                          ? category.charAt(0).toUpperCase() + category.slice(1)
                          : String(category)}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort by */}
              <div>
                <h4 className="font-medium mb-3">Sort by</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 bg-dark-gray border border-light-gray/20 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter sidebar - mobile */}
          <div
            className={`lg:hidden fixed inset-0 z-50 bg-dark/80 backdrop-blur-sm transition-opacity duration-300 ${isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={toggleFilter}
          >
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-dark-gray overflow-auto p-6"
              initial={{ x: "100%" }}
              animate={{ x: isFilterOpen ? 0 : "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl">Filters</h3>
                <button onClick={toggleFilter}>
                  <FaTimes />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                {categoriesLoading ? (
                  <div className="animate-pulse space-y-2">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <div
                        key={index}
                        className="h-6 bg-light-gray/20 rounded"
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div
                      className={`cursor-pointer hover:text-accent-light transition-colors ${selectedCategory === "all" ? "text-accent-light font-medium" : ""}`}
                      onClick={() => {
                        setSelectedCategory("all");
                        toggleFilter();
                      }}
                    >
                      All Categories
                    </div>
                    {categories?.map((category) => (
                      <div
                        key={category}
                        className={`cursor-pointer hover:text-accent-light transition-colors ${selectedCategory === category ? "text-accent-light font-medium" : ""}`}
                        onClick={() => {
                          setSelectedCategory(category);
                          toggleFilter();
                        }}
                      >
                        {typeof category === "string"
                          ? category.charAt(0).toUpperCase() + category.slice(1)
                          : String(category)}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort by */}
              <div>
                <h4 className="font-medium mb-3">Sort by</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 bg-dark-gray border border-light-gray/20 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </motion.div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            {/* Number of results and sort by (desktop) */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-300">
                {filteredProducts?.length || 0} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 bg-dark-gray border border-light-gray/20 rounded-lg focus:outline-none focus:border-accent"
              >
                <option value="default">Sort: Default</option>
                <option value="price-low">Sort: Price Low to High</option>
                <option value="price-high">Sort: Price High to Low</option>
                <option value="rating">Sort: By Rating</option>
              </select>
            </div>

            {productsLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="card animate-pulse">
                    <div className="h-[220px] bg-light-gray/20 rounded-t-xl"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-6 bg-light-gray/20 rounded w-3/4"></div>
                      <div className="h-4 bg-light-gray/20 rounded w-1/2"></div>
                      <div className="flex justify-between items-end">
                        <div className="h-6 bg-light-gray/20 rounded w-1/4"></div>
                        <div className="h-10 bg-light-gray/20 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts?.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-300 mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className="px-4 py-2 bg-medium-gray rounded-lg hover:bg-light-gray transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="card overflow-hidden group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {product.discountPercentage > 0 && (
                        <div className="absolute top-3 right-3 bg-accent-light text-white text-sm px-2 py-1 rounded-full">
                          {Math.round(product.discountPercentage)}% OFF
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg line-clamp-1">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" size={14} />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="font-bold text-lg">
                          ${product.price}
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          className="p-2 bg-accent hover:bg-accent-light rounded-lg transition-colors duration-300 flex items-center gap-2"
                        >
                          <FaShoppingCart /> Add
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
