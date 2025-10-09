import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-pink-50 py-16 text-center">
      <h3 className="text-3xl font-bold mb-4">Subscribe To Get Discount Offers</h3>
      <p className="text-gray-600 mb-6">
        Join our newsletter and never miss out on exclusive offers.
      </p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Your Email Address"
          className="px-4 py-3 w-64 rounded-l-md border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-3 rounded-r-md hover:bg-pink-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
