"use client";

import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <section
      id="categories"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Makeup */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300">
            <Image
              src="/images/makeup1.jpg"
              alt="Makeup"
              width={400}
              height={400}
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                Makeup
              </h3>
              <p className="text-gray-400">
                Explore our premium selection of luxury makeup essentials.
              </p>
            </div>
          </div>

          {/* Skincare */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300">
            <Image
              src="/images/Skin Care.jpeg"
              alt="Skincare"
              width={400}
              height={400}
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                Skincare
              </h3>
              <p className="text-gray-400">
                Revitalize your skin with our nourishing skincare products.
              </p>
            </div>
          </div>

          {/* Perfume */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300">
            <Image
              src="/images/perfume.jpeg"
              alt="Perfume"
              width={400}
              height={400}
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                Perfume
              </h3>
              <p className="text-gray-400">
                Indulge in luxury fragrances crafted for timeless allure.
              </p>
            </div>
          </div>

          {/* Hair Treatment */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300">
            <Image
              src="/images/coconut.jpeg"
              alt="Hair Treatment"
              width={400}
              height={400}
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                Hair Treatment
              </h3>
              <p className="text-gray-400">
                Restore and strengthen your hair with our advanced treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
