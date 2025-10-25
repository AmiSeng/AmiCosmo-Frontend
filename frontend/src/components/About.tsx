import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8">
          About AmiCosmo
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          AmiCosmo is a luxury beauty brand redefining elegance and self-care.
          We specialize in{" "}
          <span className="text-pink-400 font-semibold">makeup</span>,{" "}
          <span className="text-pink-400 font-semibold">
            skincare treatments
          </span>
          , <span className="text-pink-400 font-semibold">perfumes</span>, and{" "}
          <span className="text-pink-400 font-semibold">
            hair care products
          </span>
          — all crafted to enhance your natural beauty while maintaining the
          highest standards of quality.
        </p>

        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              Makeup
            </h3>
            <p className="text-gray-400">
              Premium products designed for every skin tone and style.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              Skincare
            </h3>
            <p className="text-gray-400">
              Nourishing formulas that repair, protect, and rejuvenate your
              skin.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              Perfume
            </h3>
            <p className="text-gray-400">
              Captivating fragrances that leave a lasting impression.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              Hair Treatment
            </h3>
            <p className="text-gray-400">
              Transform your hair with our luxurious nourishing treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
