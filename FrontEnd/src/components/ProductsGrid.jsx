import React from "react";

const products = [
  { id: 1, name: "Men's Shirt", price: "$75", img: "https://via.placeholder.com/300" },
  { id: 2, name: "Women's Dress", price: "$90", img: "https://via.placeholder.com/300" },
  { id: 3, name: "Sneakers", price: "$120", img: "https://via.placeholder.com/300" },
  { id: 4, name: "Watch", price: "$180", img: "https://via.placeholder.com/300" },
];

const ProductsGrid = () => {
  return (
    <section id="products" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Products</h2>
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
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-pink-600 font-bold">{p.price}</p>
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
      <div className="mt-10">
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductsGrid;
