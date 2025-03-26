import React from "react";
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
    <div>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
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
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-40 rounded-2xl"></div>
              </div>
            </div>
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
              <div key={index} className="card p-6">
                <div className="flex items-center justify-center w-14 h-14 bg-medium-gray rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
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
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
