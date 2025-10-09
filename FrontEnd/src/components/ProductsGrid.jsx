import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ✅ Updated with 8 total real fashion product images
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
  const sectionRef = useRef();

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Products</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4"
          >
            <img
              src={p.img}
              alt={p.name}
              className="rounded-lg mb-4 w-full h-52 object-cover"
            />
            <h4 className="font-semibold text-gray-800">{p.name}</h4>
            <p className="text-pink-600 font-bold">${p.price}</p>
            <div className="mt-3 flex justify-center gap-3">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Add To Cart
              </button>
              <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
