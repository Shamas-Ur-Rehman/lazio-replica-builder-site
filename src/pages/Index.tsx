
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import BuilderSection from '@/components/BuilderSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <BuilderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
