import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Services" },
  { path: "/build", label: "Build" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span
                className="
                  text-lazioBlue 
                  font-extrabold 
                  text-xl 
                  sm:text-2xl 
                  md:text-3xl 
                  tracking-tight 
                  font-montserrat
                  brand-gradient
                  select-none
                "
                style={{
                  letterSpacing: "0.04em",
                  background:
                    "linear-gradient(90deg, #1a4789 15%, #33C3F0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                happytechtrade
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium ${
                    location.pathname === link.path
                      ? "text-lazioBlue font-semibold"
                      : "text-lazioDarkGray hover:text-lazioBlue"
                  } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="lazio-button">Get Quote</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-lazioDarkGray hover:text-lazioBlue"
              aria-label="Toggle navigation"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded font-medium ${
                    location.pathname === link.path
                      ? "text-lazioBlue font-semibold"
                      : "text-lazioDarkGray hover:text-lazioBlue"
                  } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="lazio-button w-full">Get Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
