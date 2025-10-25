import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "@/components/About";
import Categories from "@/components/Categories";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Categories />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
