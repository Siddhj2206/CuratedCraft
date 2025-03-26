import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaGem,
  FaUserFriends,
  FaShieldAlt,
  FaTruck,
  FaRegCreditCard,
} from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="blur-gradient w-[500px] h-[500px] -top-[150px] -right-[150px] z-[-1]"></div>

        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="md:w-1/2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                  Mission
                </span>{" "}
                & Story
              </h1>

              <p className="text-lg text-gray-300 mb-6">
                CuratedCrafts was founded with a passion for bringing unique,
                handcrafted items to people who appreciate quality and
                individuality. We believe in supporting artisans and creators
                while connecting them with customers who value their work.
              </p>

              <p className="text-lg text-gray-300">
                Our platform showcases items that tell a story, items made with
                care and attention to detail that you won't find in mainstream
                stores. Each product in our collection has been carefully
                selected to ensure quality, uniqueness, and authenticity.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-40 rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dark-gray/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-accent-light" size={28} />,
                title: "Passion",
                description:
                  "We're passionate about unique crafts and connecting artisans with appreciative customers.",
              },
              {
                icon: <FaGem className="text-accent" size={28} />,
                title: "Quality",
                description:
                  "We carefully curate every item to ensure exceptional quality and authentic craftsmanship.",
              },
              {
                icon: <FaUserFriends className="text-accent-light" size={28} />,
                title: "Community",
                description:
                  "We believe in building a community that values creativity, sustainability, and ethical production.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-medium-gray rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Why Choose CuratedCrafts
          </h2>
          <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            We pride ourselves on providing a shopping experience that
            celebrates craftsmanship and individual expression.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaGem size={24} />,
                title: "Unique Selection",
                description:
                  "Carefully curated products you won't find anywhere else.",
              },
              {
                icon: <FaShieldAlt size={24} />,
                title: "Quality Guarantee",
                description:
                  "All items meet our strict quality standards before being listed.",
              },
              {
                icon: <FaTruck size={24} />,
                title: "Fast Shipping",
                description:
                  "Quick delivery with careful packaging to protect your items.",
              },
              {
                icon: <FaRegCreditCard size={24} />,
                title: "Secure Payment",
                description:
                  "Multiple secure payment options for your convenience.",
              },
              {
                icon: <FaUserFriends size={24} />,
                title: "Support Artisans",
                description:
                  "Your purchase directly supports independent craftspeople.",
              },
              {
                icon: <FaHeart size={24} />,
                title: "Customer Satisfaction",
                description:
                  "We're committed to ensuring you love your purchase.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-dark-gray/50 border border-light-gray/20 p-6 rounded-xl hover:border-accent/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dark-gray/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question:
                  "How do you select the products for your marketplace?",
                answer:
                  "We have a dedicated curation team that reviews all submissions from artisans and makers. We look for uniqueness, quality, craftsmanship, and items that tell a story. Only about 20% of submitted products make it to our marketplace.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary depending on the destination. You can see the shipping cost during checkout before finalizing your purchase.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy for most items (some custom-made pieces are exempt). If you're not completely satisfied with your purchase, you can return it in its original condition for a full refund or store credit.",
              },
              {
                question: "How can I become a seller on CuratedCrafts?",
                answer:
                  "We're always looking for talented artisans and makers! You can apply through our 'Become a Seller' page where you'll need to submit information about your craft, photos of your work, and your production process.",
              },
              {
                question: "Can I request custom orders?",
                answer:
                  "Many of our artisans accept custom orders. You can contact them directly through the product page by clicking on the 'Request Custom Order' button if it's available for that seller.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-dark-gray to-medium-gray p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Have questions or suggestions? We'd love to hear from you! Our
                team is always ready to assist you with any inquiries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Contact Us</button>
                <button className="px-6 py-3 border border-light-gray/30 text-white font-medium rounded-lg hover:border-accent/50 transition-all duration-300">
                  Chat with Support
                </button>
              </div>
            </div>

            <div className="blur-gradient w-[300px] h-[300px] absolute bottom-0 left-0"></div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
