import React from "react";

const NewArrivals = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://canadiv.com/assets/img/services/hire-frontend-developer/why-choose-us-copy.webp"
            alt="New Arrivals"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-md hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-pink-600 font-semibold uppercase tracking-widest mb-3">
            Trending Now
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            #NewArrivals Are Here!
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Discover our latest collection of stylish, high-quality apparel designed to 
            make you stand out. Each piece combines modern trends with timeless comfort. 
            Don’t miss out — your next favorite outfit awaits!
          </p>

          <button className="relative bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-pink-700 hover:shadow-lg transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;