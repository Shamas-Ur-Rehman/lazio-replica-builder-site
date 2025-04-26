import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <div className="bg-lazioGray py-12 xs:py-14 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-left">
              <h1
                className="
                  text-3xl 
                  xs:text-4xl 
                  sm:text-4xl 
                  md:text-6xl 
                  font-extrabold 
                  text-lazioBlue 
                  mb-6 
                  font-montserrat
                  tracking-tight
                  brand-gradient
                  select-none
                "
                style={{
                  letterSpacing: "0.05em",
                  background:
                    "linear-gradient(90deg, #1a4789 25%, #33C3F0 110%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                happytechtrade
              </h1>
              <p className="text-lg xs:text-xl md:text-2xl text-gray-700 mb-8">
                Welcome to happytechtrade — your trusted source for custom
                storage and industrial racking solutions. Discover our range of
                products, build your own system, or get in touch for a tailored
                quote!
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="bg-white p-2 rounded-lg shadow-md w-full xs:w-5/6 sm:w-3/4 md:w-full">
                <img
                  src="https://mecaluxcom.cdnwm.com/img/autonomous-mobile-robots-amrs/autonomous-mobile-robots-amrs.5.0.jpg?imwidth=640&imdensity=1"
                  alt="Warehouse Racking System"
                  className="w-full h-auto rounded object-cover"
                  style={{ maxHeight: 340 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lazioBlue mb-10 sm:mb-12 text-center">
            Our Industrial Storage Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-lazioGray p-6 rounded-lg shadow-sm min-h-[170px] flex flex-col justify-center items-center">
              <h3 className="text-lg sm:text-xl font-bold text-lazioDarkBlue mb-2 sm:mb-3">
                Quality Products
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our racking systems are built to last, using high-quality
                materials and precision engineering to ensure safety and
                durability.
              </p>
            </div>
            <div className="bg-lazioGray p-6 rounded-lg shadow-sm min-h-[170px] flex flex-col justify-center items-center">
              <h3 className="text-lg sm:text-xl font-bold text-lazioDarkBlue mb-2 sm:mb-3">
                Custom Solutions
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Every warehouse is unique. We design and build storage systems
                that match your specific requirements and space constraints.
              </p>
            </div>
            <div className="bg-lazioGray p-6 rounded-lg shadow-sm min-h-[170px] flex flex-col justify-center items-center">
              <h3 className="text-lg sm:text-xl font-bold text-lazioDarkBlue mb-2 sm:mb-3">
                Expert Installation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our professional installation team ensures your racking system
                is set up correctly, safely, and efficiently.
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Link to="/products">
              <Button className="lazio-button w-full sm:w-auto text-base md:text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mt-2 mb-2">
        <Link to="/build">
          <Button className="lazio-button w-full sm:w-auto text-base md:text-lg">
            Start Building <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            variant="outline"
            className="border-lazioBlue text-lazioBlue hover:bg-lazioBlue hover:text-white w-full sm:w-auto text-base md:text-lg"
          >
            Contact Sales
          </Button>
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
