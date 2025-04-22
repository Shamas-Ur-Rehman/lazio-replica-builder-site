
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-lazioGray">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lazioDarkGray mb-6">
              Build Your Custom Racking Solution
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Configure your industrial storage system with our easy-to-use builder. 
              Get a personalized quote for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="lazio-button">
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-lazioBlue text-lazioBlue hover:bg-lazioBlue hover:text-white">
                Contact Sales
              </Button>
            </div>
          </div>
          
          {/* Image */}
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
  );
};

export default Hero;
