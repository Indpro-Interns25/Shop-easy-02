import React, { useRef, useEffect } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "Men's Shirt",
    price: 75,
    img: "https://www.punekarcotton.com/cdn/shop/products/light-beige-color-prime-linen-shirt-for-men-725265.jpg?v=1707806978&width=3840",
    category: "men",
  },
  {
    id: 3,
    name: "Men's Trousers",
    price: 120,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2v0AAHK71ok0e4L9ZIRpgDgH2UzSYd0ZCAMYVZ-mZ5txd1k3dik01hq9alVjyTmy2u_yIusMHSTI0Eq-9Jq_aMy7q3TggCsJ6JoR9GnV_&usqp=CAc",
    category: "men",
  },
  {
    id: 5,
    name: "Men's T-Shirt",
    price: 55,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    category: "men",
  },
  {
    id: 7,
    name: "Men's Jacket",
    price: 150,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0tG2MLo1VotwTyT4H17kTBH6Hw3I3TPdzsPLIIKnN4CiCJk1CLdN7HIfOYFJ4jWwxYfymXf6sEiQEPVbm4ANbVRNBzTb-65VQKKjH4W2laTzqBH8ZNJ9By5gNE4kbwm-xmz3tw4k&usqp=CAc",
    category: "men",
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 90,
    img: "https://images.fashiontiy.com/products/T103AD7119/product_16.jpg?x-oss-process=image/resize,m_fill,w_1100,h_1100/interlace,1/format,webp",
    category: "women",
  },
  {
    id: 4,
    name: "Women's Trousers",
    price: 180,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZzgeFIMUTY-0rPN36Rl2bvNKtmxCv4aZbyb8N1wKZSttgdmyTnKIOL8N5ssxTmUv5XWSYC35hKiTfTkZcWK-xR70HyolVDs6wsODuPCq5bg&usqp=CAc",
    category: "women",
  },
  {
    id: 6,
    name: "Women's Top",
    price: 65,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8nCriRwk9tJjzuN5r0pC7fH945zZinP7zEsJL2B1rlAgX7cCEFx2dWPdLzuZH3QvZzDsgA4J-wtuNHG6f3SAz0G0CPUXIAWLOSNxffHmEuA&usqp=CAc",
    category: "women",
  },
  {
    id: 8,
    name: "Women's Skirt",
    price: 85,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRV1vXX7bb6LeuTnAYddorPgJSI7VWM74RIXqLGWstxxKbKMKC3MXVQIX0N5OjK06KEQS6DCGyMZwpyQJ02clBy7n8Cs11oyIonwP9yxB-hxp_W&usqp=CAc",
    category: "women",
  },
];
const ProductsGrid = () => {
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const cardWidth = 250 + 32; // card width (250px) + gap (32px)
  
  // We triplicate the products to create a seamless loop
  const displayProducts = [...products, ...products, ...products];

  // Set the initial scroll position to the start of the "middle" set of products
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const startPosition = products.length * cardWidth;
      container.scrollLeft = startPosition;
    }
  }, []);

  const handleArrowClick = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // This effect handles the "infinite" illusion by silently repositioning the scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        const listWidth = products.length * cardWidth;
        const { scrollLeft } = container;

        // If scrolled to the last set of items (the right clone)
        if (scrollLeft >= listWidth * 2) {
          container.style.scrollBehavior = 'auto';
          container.scrollLeft = listWidth + (scrollLeft - listWidth * 2);
          requestAnimationFrame(() => { container.style.scrollBehavior = 'smooth'; });
        } 
        // If scrolled to the first set of items (the left clone)
        else if (scrollLeft <= listWidth - cardWidth) {
          container.style.scrollBehavior = 'auto';
          container.scrollLeft = listWidth + (scrollLeft % listWidth);
           requestAnimationFrame(() => { container.style.scrollBehavior = 'smooth'; });
        }
      }, 250); // Delay to wait for scroll animation to be near completion
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    }
  }, [cardWidth, products.length]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <section className="py-16 bg-gray-50 text-center overflow-hidden">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Products</h2>
        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={() => handleArrowClick("prev")}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white transition-colors duration-300"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto px-4 py-2 no-scrollbar scroll-smooth"
          >
            {displayProducts.map((p, index) => (
              <div
                key={`${p.id}-${index}`}
                className="relative group bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex-shrink-0 w-[250px] overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-lg mb-4 w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x208/f7f7f7/cbd5e0?text=Image+Error'; }}
                />
                <h4 className="font-semibold text-gray-800">{p.name}</h4>
                <p className="text-pink-600 font-bold">${p.price}</p>
                <div className="absolute inset-0 bg-white/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded mb-2 hover:bg-gray-700">Add To Cart</button>
                  <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleArrowClick("next")}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white transition-colors duration-300"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductsGrid;

