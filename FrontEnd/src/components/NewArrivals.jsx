import React from "react";

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

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 flex-shrink-0 w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-64 object-cover rounded-xl mb-4"
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x400/f7f7f7/cbd5e0?text=Image+Not+Found'; }}
    />
    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
    <p className="text-pink-600 font-bold text-xl">${product.price}</p>
  </div>
);


const MarqueeColumn = ({ products, direction = "up" }) => {
  // Duplicate products to create a seamless loop effect
  const repeatedProducts = [...products, ...products];

  const animationClass = direction === "up" ? "animate-marquee-up" : "animate-marquee-down";

  return (
    <div className="w-full md:w-1/2 h-[500px] overflow-hidden relative group">
      {/* Fading effect at the top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none"></div>
      
      {/* The scrolling column */}
      <div className={`flex flex-col w-full group-hover:[animation-play-state:paused] ${animationClass}`}>
        {repeatedProducts.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};


const NewArrivals = () => {
  // Filter products into men's and women's categories
  const mensProducts = products.filter((p) => p.category === "men");
  const womensProducts = products.filter((p) => p.category === "women");

  return (
    <>
      {/* Styles for marquee animation */}
      <style>{`
        @keyframes marquee-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-marquee-up {
          animation: marquee-up 10s linear infinite;
        }
        @keyframes marquee-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .animate-marquee-down {
          animation: marquee-down 10s linear infinite;
        }
      `}</style>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Left Content */}
          <div className="w-full md:w-2/4 text-center md:text-left px-4">
            <h4 className="text-pink-600 font-semibold uppercase tracking-widest mb-3">
              Trending Now
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              #NewArrivals Are Here!
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-lg mx-auto md:mx-0">
              Discover our latest collection of stylish, high-quality apparel designed to
              make you stand out. Each piece combines modern trends with timeless comfort.
              Don’t miss out — your next favorite outfit awaits!
            </p>
            <button className="bg-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-pink-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300">
              Shop Now
            </button>
          </div>

          {/* Right side wrapper for both marquees */}
          <div className="w-full md:w-2/4 flex flex-col sm:flex-row gap-8">
            {/* Men's Column (Top to Down) */}
            <MarqueeColumn products={mensProducts} direction="down" />

            {/* Women's Column (Down to Top) */}
            <MarqueeColumn products={womensProducts} direction="up" />
          </div>

        </div>
      </section>
    </>
  );
};

export default NewArrivals;

