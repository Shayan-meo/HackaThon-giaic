import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-center text-success">Blog Page</h1>
      <Footer />
    </div>
  );
};

export default BlogPage;
