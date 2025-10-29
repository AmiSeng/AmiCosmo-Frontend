import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/whyChooseUs";
import Testimonials from "@/components/Testimonials";
import TrendingProducts from "@/components/TrendingProducts";
import Contact from "@/components/Contacts";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <TrendingProducts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
