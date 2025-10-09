import React from "react";
import Hero from "../components/Hero.jsx";
import WhyShop from "../components/WhyShop.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import Subscribe from "../components/Subscribe.jsx";
import Testimonials from "../components/Testimonals.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyShop />
      <ProductsGrid />
      <Subscribe />
      <Testimonials />
    </>
  );
};

export default Home;
