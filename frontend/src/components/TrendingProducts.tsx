"use client";
import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Radiant Glow Serum",
    image: "/images/faceSerum.jpeg",
    price: "$24.99",
  },
  {
    id: 2,
    name: "HydraBalance Moisturizer",
    image: "/images/CeraVe.jpeg",
    price: "$29.99",
  },
  {
    id: 3,
    name: "PureClean Face Wash",
    image: "/images/wash.jpeg",
    price: "$19.99",
  },
  {
    id: 4,
    name: "Luxury Lipstick",
    image: "/images/lipstick.jpeg",
    price: "$24.99",
  },
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-12">
          Trending <span className="text-white">Products</span>
        </h2>

        {/* Product Grid / Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 overflow-x-auto md:overflow-visible scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition-transform hover:scale-105 duration-300 min-w-[260px]"
            >
              <div className="relative w-full h-56 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-pink-400 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-4">{product.price}</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full transition duration-300">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
