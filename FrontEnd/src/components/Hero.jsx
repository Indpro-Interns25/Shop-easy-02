import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef();

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate on slide change
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [currentSlide]);

  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 transition-all duration-700"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{activeSlide.title}</h1>
        <p className="max-w-2xl mx-auto mb-6">{activeSlide.description}</p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
