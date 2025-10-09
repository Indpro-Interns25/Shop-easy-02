import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sale 20% Off On Everything
        </h1>
        <p className="max-w-2xl mx-auto mb-6">
          Discover the latest trends in fashion and enjoy exclusive discounts on
          our premium products. Limited time only!
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
