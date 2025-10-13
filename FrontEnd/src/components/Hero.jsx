import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
// import video from "src/assets/video.mp4"; // Correct relative import based on your structure

// If your file is src/assets/video.mp4, use this import
import video from "../assets/video.mp4"; // adjust the path if Hero.jsx is inside src/components or src/pages

const slides = [
  {
    title: "Sale 20% Off On Everything",
    description: "Discover the latest trends in fashion and enjoy exclusive discounts on our premium products. Limited time only!",
  },
  {
    title: "Mega Sale 30% Off Storewide",
    description: "Upgrade your wardrobe with trendy styles and unbeatable offers. Shop your favorite looks today!",
  },
  {
    title: "Exclusive 40% Off New Arrivals",
    description: "Don’t miss out on our fresh arrivals and enjoy 40% off the latest fashion must-haves!",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [currentSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background video using imported file */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 transition-all duration-700 mt-30"
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
