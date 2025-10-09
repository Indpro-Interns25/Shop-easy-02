import React, { useState, useEffect } from "react";

const Hero = () => {
  // Each slide now has its own image and text content
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80",
      title: "Sale 20% Off On Everything",
      description:
        "Discover the latest trends in fashion and enjoy exclusive discounts on our premium products. Limited time only!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1920&q=80",
      title: "Mega Sale 30% Off Storewide",
      description:
        "Upgrade your wardrobe with trendy styles and unbeatable offers. Shop your favorite looks today!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80",
      title: "Exclusive 40% Off New Arrivals",
      description:
        "Don’t miss out on our fresh arrivals and enjoy 40% off the latest fashion must-haves!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 transition-all duration-700">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="max-w-2xl mx-auto mb-6">
          {slides[currentSlide].description}
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
