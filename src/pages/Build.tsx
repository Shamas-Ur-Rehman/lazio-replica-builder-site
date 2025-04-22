
import React from 'react';
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BuilderSection from '@/components/BuilderSection';

const Build = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-lazioBlue mb-6 text-center">Build Your System</h2>
        <div className="mb-8 max-w-md text-center text-gray-700">
          Start configuring your custom industrial storage or racking solution. Tell us about your requirements, and we'll help bring your vision to life.
        </div>
      </div>
      <BuilderSection />
    </main>
    <Footer />
  </div>
);

export default Build;
