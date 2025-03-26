import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { FaShoppingBag, FaStar, FaArrowRight } from "react-icons/fa";

// Fetch featured products from dummyjson API
const fetchFeaturedProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=6");
  const data = await response.json();
  return data.products;
};

const Home = () => {
  const {
    data: featuredProducts,
    isLoading,
    error,
  } = useQuery("featuredProducts", fetchFeaturedProducts);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                  Unique Crafts
                </span>{" "}
                for Your Collection
              </h1>

              <p className="text-lg text-gray-300 mb-8">
                Explore our curated selection of handmade, vintage, and unique
                items that you won't find in mainstream stores.
              </p>

              <div className="flex gap-4 mb-8">
                <Link
                  to="/shop"
                  className="btn-primary flex items-center gap-2"
                >
                  <FaShoppingBag /> Shop Now
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 border border-light-gray/30 text-white font-medium rounded-lg hover:border-accent/50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-dark-gray bg-medium-gray flex items-center justify-center"
                    >
                      <span className="text-xs font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-sm text-gray-300">
                    From over 500+ happy customers
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-20 card p-4 md:p-6">
                <img
                  src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Featured craft"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-3xl transform translate-x-4 translate-y-4 z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-dark-gray/30">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-accent-light hover:underline transition-all"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card p-4 h-[400px] animate-pulse">
                  <div className="h-[250px] bg-light-gray/20 rounded-lg mb-4"></div>
                  <div className="h-6 bg-light-gray/20 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-light-gray/20 rounded mb-4 w-1/2"></div>
                  <div className="h-10 bg-light-gray/20 rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-400">
                Failed to load featured products. Please try again later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts?.map((product) => (
                <div key={product.id} className="card group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-accent-light/80 text-white text-sm px-2 py-1 rounded-full">
                      {product.discountPercentage}% OFF
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl truncate">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xl">
                        ${product.price}
                      </span>
                      <Link
                        to="/shop"
                        className="px-4 py-2 bg-medium-gray rounded-lg hover:bg-light-gray transition-colors duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "Electronics",
              "Jewelry",
              "Men's Clothing",
              "Women's Clothing",
            ].map((category, index) => (
              <div
                key={index}
                className="card group relative h-[180px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70 z-10"></div>
                <img
                  src={`https://source.unsplash.com/random/300x300/?${category.toLowerCase()}`}
                  alt={category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="font-bold text-lg">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-gray/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-dark-gray to-medium-gray p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-gray-300 mb-6 max-w-lg">
                Be the first to know about new collections, special offers, and
                exclusive content.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-lg bg-light-gray/50 border border-light-gray/20 focus:border-accent outline-none w-full sm:w-auto sm:flex-1"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
