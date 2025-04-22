
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="text-lazioBlue font-bold text-2xl">LAZIO RACKING</div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium">Home</a>
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium">Products</a>
              <a href="#" className="text-lazioBlue font-semibold">Build</a>
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium">About</a>
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium">Contact</a>
              <Button className="lazio-button">Get Quote</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-lazioDarkGray hover:text-lazioBlue"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3 sm:px-3">
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium block px-3 py-2">Home</a>
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium block px-3 py-2">Products</a>
              <a href="#" className="text-lazioBlue font-semibold block px-3 py-2">Build</a>
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium block px-3 py-2">About</a>
              <a href="#" className="text-lazioDarkGray hover:text-lazioBlue font-medium block px-3 py-2">Contact</a>
              <Button className="lazio-button w-full">Get Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
