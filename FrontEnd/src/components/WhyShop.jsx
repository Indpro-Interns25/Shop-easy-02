import React from "react";

const features = [
  { title: "Fast Delivery", desc: "Quick and reliable shipping worldwide." },
  { title: "Free Shipping", desc: "On all orders over $50." },
  { title: "Best Quality", desc: "Premium materials and craftsmanship." },
];

const WhyShop = () => {
  return (
    <section className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Why Shop With Us</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition-all"
          >
            <h4 className="text-xl font-semibold text-pink-600 mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyShop;
