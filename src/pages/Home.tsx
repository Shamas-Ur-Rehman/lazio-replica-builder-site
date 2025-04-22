
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <div className="bg-lazioGray py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-6xl font-bold text-lazioBlue mb-6">\happytechtrade</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Welcome to \happytechtrade — your trusted source for custom storage and industrial racking solutions. 
                Discover our range of products, build your own system, or get in touch for a tailored quote!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/build">
                  <Button className="lazio-button">
                    Start Building <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-lazioBlue text-lazioBlue hover:bg-lazioBlue hover:text-white">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Warehouse Racking System" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-lazioBlue mb-12 text-center">Our Industrial Storage Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-lazioGray p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-lazioDarkBlue mb-3">Quality Products</h3>
              <p className="text-gray-700">Our racking systems are built to last, using high-quality materials and precision engineering to ensure safety and durability.</p>
            </div>
            <div className="bg-lazioGray p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-lazioDarkBlue mb-3">Custom Solutions</h3>
              <p className="text-gray-700">Every warehouse is unique. We design and build storage systems that match your specific requirements and space constraints.</p>
            </div>
            <div className="bg-lazioGray p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-lazioDarkBlue mb-3">Expert Installation</h3>
              <p className="text-gray-700">Our professional installation team ensures your racking system is set up correctly, safely, and efficiently.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button className="lazio-button">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
