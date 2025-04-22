
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  { 
    name: 'Selective Racking', 
    desc: 'Versatile storage suited for most warehouses with direct access to every pallet.', 
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
  },
  { 
    name: 'Drive-In Racking', 
    desc: 'Maximize storage density for uniform products with a last-in, first-out system.', 
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544'
  },
  { 
    name: 'Push Back Racking', 
    desc: 'Dynamic racking for high-density storage with better selectivity than drive-in systems.', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  { 
    name: 'Cantilever Racking', 
    desc: 'Ideal for long or bulky items like lumber, piping, or furniture.', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  { 
    name: 'Mezzanine Floors', 
    desc: 'Expand workspace with raised platforms to effectively double your available floor area.', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  { 
    name: 'Pallet Flow Systems', 
    desc: 'Gravity-fed, high-density storage ideal for perishable inventory that requires FIFO rotation.', 
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
  },
];

const Products = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-lazioBlue mb-6 text-center">Our Products</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Discover our comprehensive range of industrial storage and racking solutions designed to maximize your warehouse efficiency and organization.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-lazioDarkBlue">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.desc}</p>
                <Link to="/build">
                  <Button className="lazio-button w-full">Configure Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-lazioGray p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Our team of experts is ready to design a tailored storage system that meets your specific requirements.
            </p>
            <Link to="/contact">
              <Button className="lazio-button">Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Products;
