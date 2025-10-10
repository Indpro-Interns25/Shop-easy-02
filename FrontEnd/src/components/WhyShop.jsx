import React from "react";
import { FaTruck, FaGift, FaMedal } from "react-icons/fa"; // Icons for each feature

const features = [
  {
    icon: <FaTruck className="text-4xl mb-4 text-white" />,
    title: "Fast Delivery",
    desc: "Variations of passages of Lorem Ipsum available.",
  },
  {
    icon: <FaGift className="text-4xl mb-4 text-white" />,
    title: "Free Shipping",
    desc: "Variations of passages of Lorem Ipsum available.",
  },
  {
    icon: <FaMedal className="text-4xl mb-4 text-white" />,
    title: "Best Quality",
    desc: "Variations of passages of Lorem Ipsum available.",
  },
];

const WhyShop = () => {
  return (
    <section className="py-20 bg-white text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Why <span className="text-pink-600">Shop With Us</span>
      </h2>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#052c3c] text-white rounded-lg py-10 px-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center">
              {item.icon}
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyShop;