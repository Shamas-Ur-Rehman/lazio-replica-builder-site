
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-lazioBlue mb-8 text-center">About \happytechtrade</h2>
        
        <div className="max-w-4xl mb-12">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Our Warehouse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-lazioDarkBlue mb-4">Our Story</h3>
                <p className="text-gray-700 mb-4">
                  At \happytechtrade, we're passionate about helping businesses find the perfect storage and racking solutions for their needs. 
                  Our experienced team provides guidance at each step — from planning and design to installation and maintenance.
                </p>
                <p className="text-gray-700">
                  With a commitment to quality, safety, and customer satisfaction, we've become a leading name in industrial storage infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-12">
          <div className="bg-lazioGray p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-lazioDarkBlue mb-3">Our Mission</h3>
            <p className="text-gray-700">To provide innovative storage solutions that optimize space, improve efficiency, and enhance safety for businesses of all sizes.</p>
          </div>
          <div className="bg-lazioGray p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-lazioDarkBlue mb-3">Our Values</h3>
            <p className="text-gray-700">Quality, integrity, customer focus, and continuous improvement guide everything we do at \happytechtrade.</p>
          </div>
          <div className="bg-lazioGray p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-lazioDarkBlue mb-3">Our Team</h3>
            <p className="text-gray-700">Our dedicated professionals bring decades of combined experience in warehouse solutions and logistics optimization.</p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-lazioDarkBlue mb-4">Ready to Get Started?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Whether you need a complete warehouse racking system or a custom storage solution, our team is here to help.
          </p>
          <Link to="/contact">
            <Button className="lazio-button">Contact Us Today</Button>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
