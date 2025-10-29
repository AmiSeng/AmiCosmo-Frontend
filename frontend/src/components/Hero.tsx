import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/collection.jpeg"
          alt="Luxury Beauty Background"
          className="object-cover w-full h-full"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-400 drop-shadow-lg mb-6">
          Embrace Luxury. Feel Beautiful.
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Discover timeless elegance with AmiCosmo’s premium beauty collection.
        </p>
        <button className="bg-pink-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
