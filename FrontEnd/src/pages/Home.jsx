import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero.jsx";
import WhyShop from "../components/WhyShop.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import Subscribe from "../components/Subscribe.jsx";
import Testimonials from "../components/Testimonals.jsx";
import NewArrivals from "../components/NewArrivals.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const whyShopRef = useRef(null);
  const productsRef = useRef(null);
  const subscribeRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    if (whyShopRef.current) {
      gsap.fromTo(
        whyShopRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyShopRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (subscribeRef.current) {
      gsap.fromTo(
        subscribeRef.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subscribeRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  const wrapperStyle = { overflow: "visible" };

  return (
    <>
    <div>
      <Hero />
      {/* Wrap with div that doesn't restrict layout */}
      
      <div ref={productsRef} style={wrapperStyle}>
        <NewArrivals />
      </div>
      <div ref={productsRef} style={wrapperStyle}>
        <ProductsGrid />
      </div>
      <div ref={subscribeRef} style={wrapperStyle}>
        <Subscribe />
      </div>
      <div ref={testimonialsRef} style={wrapperStyle}>
        <Testimonials />
      </div>
      <div ref={whyShopRef} style={wrapperStyle}>
        <WhyShop />
      </div>


    </div>
      
    </>
  );
};

export default Home;
