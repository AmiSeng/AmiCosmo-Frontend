"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Beauty Enthusiast",
      image: "/images/user1.jpeg",
      quote:
        "AmiCosmo has completely transformed my skincare routine! My skin feels smoother and looks radiant every day.",
    },
    {
      id: 2,
      name: "Lina Rodriguez",
      role: "Makeup Artist",
      image: "/images/user2.jpeg",
      quote:
        "I love how natural and effective these products are. My clients always ask what I use — it’s AmiCosmo!",
    },
    {
      id: 3,
      name: "Aisha Ahmed",
      role: "Influencer",
      image: "/images/user3.jpeg",
      quote:
        "The best beauty products I’ve ever tried. The quality and scent are just amazing!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-pink-500 mb-12"
        >
          What Our <span className="text-white">Customers Say</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map(({ id, name, role, image, quote }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image}
                alt={name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-6 border-4 border-pink-400"
              />
              <p className="text-gray-300 italic mb-4">{quote}</p>
              <h3 className="text-xl font-semibold text-pink-400">{name}</h3>
              <p className="text-sm text-gray-400">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
