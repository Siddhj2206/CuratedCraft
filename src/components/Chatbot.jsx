import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

const CHATBOT_RESPONSES = {
  greeting: "Hello! Welcome to CuratedCrafts. How can I help you today?",
  delivery:
    "We offer worldwide shipping. Standard delivery takes 5-7 business days, while express delivery takes 2-3 business days. Shipping costs are calculated at checkout based on your location.",
  returns:
    "We have a 30-day return policy. If you're not satisfied with your purchase, you can return it in its original condition for a full refund or store credit.",
  products:
    "We offer a curated selection of handmade crafts, vintage items, jewelry, home decor, and unique gifts from artisans around the world.",
  payment:
    "We accept all major credit cards, PayPal, and Apple Pay for secure and convenient payments.",
  discount:
    "Sign up for our newsletter to receive a 10% discount on your first purchase. We also run seasonal promotions and special offers for our members.",
  custom:
    "Many of our artisans accept custom orders. You can request a custom piece through the product page or by contacting our customer service team.",
  fallback:
    "I'm sorry, I couldn't understand your question. Could you please rephrase or ask about shipping, returns, products, payment methods, or discounts?",
};

const Chatbot = ({ isOpen, closeChat }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: CHATBOT_RESPONSES.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Generate bot response
    setTimeout(() => {
      const botResponse = generateResponse(input.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const generateResponse = (input) => {
    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return CHATBOT_RESPONSES.greeting;
    } else if (
      input.includes("delivery") ||
      input.includes("shipping") ||
      input.includes("ship")
    ) {
      return CHATBOT_RESPONSES.delivery;
    } else if (input.includes("return") || input.includes("refund")) {
      return CHATBOT_RESPONSES.returns;
    } else if (
      input.includes("product") ||
      input.includes("item") ||
      input.includes("sell")
    ) {
      return CHATBOT_RESPONSES.products;
    } else if (
      input.includes("payment") ||
      input.includes("pay") ||
      input.includes("card")
    ) {
      return CHATBOT_RESPONSES.payment;
    } else if (
      input.includes("discount") ||
      input.includes("coupon") ||
      input.includes("offer")
    ) {
      return CHATBOT_RESPONSES.discount;
    } else if (input.includes("custom") || input.includes("personalize")) {
      return CHATBOT_RESPONSES.custom;
    } else {
      return CHATBOT_RESPONSES.fallback;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (mobile only) */}
          <motion.div
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeChat}
          />

          {/* Chat panel */}
          <motion.div
            className="fixed bottom-4 right-4 w-full md:w-[380px] h-[500px] bg-dark-gray z-50 shadow-xl rounded-xl overflow-hidden flex flex-col max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Chat header */}
            <div className="px-4 py-3 bg-gradient-to-r from-accent to-accent-light flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot color="white" size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-white">
                    CuratedCrafts Assistant
                  </h3>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes color="white" size={16} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                    max-w-[80%] rounded-xl p-3
                    ${
                      message.sender === "user"
                        ? "bg-accent text-white rounded-tr-none"
                        : "bg-medium-gray text-white rounded-tl-none"
                    }
                  `}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.sender === "bot" ? (
                        <FaRobot size={12} className="text-accent-light" />
                      ) : (
                        <FaUser size={12} className="text-white" />
                      )}
                      <span className="text-xs opacity-70">
                        {message.sender === "bot" ? "Assistant" : "You"} •{" "}
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-light-gray/20 p-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-4 bg-medium-gray rounded-full focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button
                  type="submit"
                  className="w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent-light transition-colors rounded-full"
                  disabled={!input.trim()}
                  aria-label="Send message"
                >
                  <FaPaperPlane color="white" size={16} />
                </button>
              </div>
              <div className="text-xs text-gray-400 text-center mt-2">
                Ask about delivery, returns, products, or support
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
