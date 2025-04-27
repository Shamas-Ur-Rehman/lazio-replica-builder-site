import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Selective Racking",
    desc: "Versatile storage suited for most warehouses with direct access to every pallet.",
    image:
      "https://mecaluxcom.cdnwm.com/documents/20128/499204/estpicking2-520.jpg/2ce3902c-bf23-41bc-d793-7e6abf791ab6?t=1638258978000&e=jpg&imwidth=640&imdensity=1",
  },
  {
    name: "Drive-In Racking",
    desc: "Maximize storage density for uniform products with a last-in, first-out system.",
    image:
      "https://mecaluxcom.cdnwm.com/documents/20128/499204/palets1-520.jpg/f4553537-b119-c6b0-b347-5156dcd1c660?t=1638258916000&e=jpg&imwidth=640&imdensity=1",
  },
  {
    name: "Push Back Racking",
    desc: "Dynamic racking for high-density storage with better selectivity than drive-in systems.",
    image:
      "https://mecaluxcom.cdnwm.com/documents/20128/499204/miniload-transportador-operarios-520.jpg/d808378b-38ef-fd6a-bacd-130489eef1fc?t=1638258893000&e=jpg&imwidth=640&imdensity=1",
  },
  {
    name: "Cantilever Racking",
    desc: "Ideal for long or bulky items like lumber, piping, or furniture.",
    image:
      "https://v7-upload.digoodcms.com/website_166/2024-12-31/4-3.jpg?imageMogr2/crop/360x360/gravity/center/format/webp",
  },
  {
    name: "Mezzanine Floors",
    desc: "Expand workspace with raised platforms to effectively double your available floor area.",
    image:
      "https://v7-upload.digoodcms.com/website_166/2024-08-13/Radio-Shuttle-Pallet-Racking-1.jpg?imageMogr2/crop/360x360/gravity/center/format/webp",
  },
  {
    name: "Pallet Flow Systems",
    desc: "Gravity-fed, high-density storage ideal for perishable inventory that requires FIFO rotation.",
    image:
      "https://v7-upload.digoodcms.com/website_166/2024-12-31/2-2.jpg?imageMogr2/crop/360x360/gravity/center/format/webp",
  },
];

const Products = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-lazioBlue mb-6 text-center">
          Our Services
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Discover our comprehensive range of industrial storage and racking
          solutions designed to maximize your warehouse efficiency and
          organization.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-lazioDarkBlue">
                  {product.name}
                </h3>
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
              Our team of experts is ready to design a tailored storage system
              that meets your specific requirements.
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
