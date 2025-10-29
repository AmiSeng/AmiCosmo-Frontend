import React from "react";
import { Sparkles, Leaf, Heart, Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-12">
          Why Choose <span className="text-white">AmiCosmo</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Premium Quality */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-300">
            <Sparkles className="mx-auto text-pink-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-pink-400 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-300">
              Each product is crafted with precision and top-tier ingredients.
            </p>
          </div>

          {/* Natural Ingredients */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-300">
            <Leaf className="mx-auto text-pink-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-pink-400 mb-2">
              Natural Ingredients
            </h3>
            <p className="text-gray-300">
              We blend nature and science to create safe, nourishing products.
            </p>
          </div>

          {/* Cruelty-Free */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-300">
            <Heart className="mx-auto text-pink-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-pink-400 mb-2">
              100% Cruelty-Free
            </h3>
            <p className="text-gray-300">
              Beauty with compassion — never tested on animals.
            </p>
          </div>

          {/* Trusted Worldwide */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-300">
            <Star className="mx-auto text-pink-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-pink-400 mb-2">
              Trusted Worldwide
            </h3>
            <p className="text-gray-300">
              Loved by thousands of beauty enthusiasts across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
