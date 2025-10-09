import React from "react";

const testimonials = [
  {
    name: "Anna Trevor",
    text: "Amazing quality and fast delivery! I love their service.",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "John Smith",
    text: "Best online store I’ve ever shopped from. Highly recommended!",
    img: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Testimonials</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 shadow rounded-xl hover:shadow-lg transition-all"
          >
            <img
              src={t.img}
              alt={t.name}
              className="mx-auto rounded-full w-20 h-20 mb-4"
            />
            <p className="text-gray-700 italic mb-3">“{t.text}”</p>
            <h4 className="font-semibold text-pink-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
