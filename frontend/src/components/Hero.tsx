import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-b from-black via-pink-900 to-black flex items-center justify-center text-center"
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
          Luxury Cosmetics, Redefined
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          Experience elegance and beauty like never before
        </p>
        <button className="bg-pink-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
