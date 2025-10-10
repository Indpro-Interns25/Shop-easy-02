import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ✅ Product data
const products = [
  {
    id: 1,
    name: "Men's Shirt",
    price: 75,
    img: "https://www.punekarcotton.com/cdn/shop/products/light-beige-color-prime-linen-shirt-for-men-725265.jpg?v=1707806978&width=3840",
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 90,
    img: "https://www.shutterstock.com/image-photo/ghost-mannequin-dress-without-human-260nw-2316338469.jpg",
  },
  {
    id: 3,
    name: "Men's Trousers",
    price: 120,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2v0AAHK71ok0e4L9ZIRpgDgH2UzSYd0ZCAMYVZ-mZ5txd1k3dik01hq9alVjyTmy2u_yIusMHSTI0Eq-9Jq_aMy7q3TggCsJ6JoR9GnV_&usqp=CAc",
  },
  {
    id: 4,
    name: "Women's Trousers",
    price: 180,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZzgeFIMUTY-0rPN36Rl2bvNKtmxCv4aZbyb8N1wKZSttgdmyTnKIOL8N5ssxTmUv5XWSYC35hKiTfTkZcWK-xR70HyolVDs6wsODuPCq5bg&usqp=CAc",
  },
  {
    id: 5,
    name: "Men's T-Shirt",
    price: 55,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Women's Top",
    price: 65,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8nCriRwk9tJjzuN5r0pC7fH945zZinP7zEsJL2B1rlAgX7cCEFx2dWPdLzuZH3QvZzDsgA4J-wtuNHG6f3SAz0G0CPUXIAWLOSNxffHmEuA&usqp=CAc",
  },
  {
    id: 7,
    name: "Men's Jacket",
    price: 150,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQV3sDNb8ff3o57RP8FEWKjlbQtxqsAESs_SOt2UlmO-fMpBZ1EXcNCzQT0-N1HIMf9W-1ugESlfrBtfqbDyXd26H5FnhtE7SOvnOujCey_&usqp=CAc",
  },
  {
    id: 8,
    name: "Women's Skirt",
    price: 85,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRV1vXX7bb6LeuTnAYddorPgJSI7VWM74RIXqLGWstxxKbKMKC3MXVQIX0N5OjK06KEQS6DCGyMZwpyQJ02clBy7n8Cs11oyIonwP9yxB-hxp_W&usqp=CAc",
  },
];

const ProductsGrid = () => {
  const marqueeRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: `-${totalWidth}px`, // ✅ fixed this line
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-gray-50 text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Products</h2>

      <div className="relative w-full overflow-hidden">
        {/* ✅ Marquee Animation */}
        <div ref={marqueeRef} className="flex gap-8 w-max">
          {[...products, ...products].map((p, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 min-w-[250px] overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.name}
                className="rounded-lg mb-4 w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <h4 className="font-semibold text-gray-800">{p.name}</h4>
              <p className="text-pink-600 font-bold">${p.price}</p>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-white/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-gray-800 text-white rounded mb-2 hover:bg-gray-700">
                  Add To Cart
                </button>
                <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
