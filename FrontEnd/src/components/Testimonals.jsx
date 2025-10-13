import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Anna Trevor",
    text: "Amazing quality and fast delivery! I love their service.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80", // smiling woman portrait
  },
  {
    name: "John Smith",
    text: "Best online store I've ever shopped from. Highly recommended!",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", // casual man portrait
  },
  {
    name: "Sophia Patel",
    text: "Their clothing fits perfectly and the material feels amazing. Will buy again!",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80", // confident woman portrait
  },
  {
    name: "David Lee",
    text: "Very reliable store with quick customer support. Five stars from me!",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80", // cheerful male portrait
  },
];

const Testimonials = () => {
  const sectionRef = useRef();

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
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
    <section ref={sectionRef} className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Customer Testimonials</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 shadow rounded-xl hover:shadow-lg transition-all"
          >
            <img
              src={t.img}
              alt={t.name}
              className="mx-auto rounded-full w-20 h-20 mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-3">{t.text}</p>
            <h4 className="font-semibold text-pink-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
