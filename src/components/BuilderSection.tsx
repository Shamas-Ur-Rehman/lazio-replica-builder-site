import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type RackingOption = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const BuilderSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);

  const rackingTypes: RackingOption[] = [
    {
      id: "selective",
      title: "Selective Racking",
      description:
        "Best for accessing all pallets directly with lower storage density.",
      image:
        "https://mecaluxcom.cdnwm.com/documents/20128/499204/estpicking2-520.jpg/2ce3902c-bf23-41bc-d793-7e6abf791ab6?t=1638258978000&e=jpg&imwidth=640&imdensity=1",
    },
    {
      id: "drive-in",
      title: "Drive-In Racking",
      description:
        "High-density storage with limited selectivity, optimized for LIFO.",
      image:
        "https://mecaluxcom.cdnwm.com/documents/20128/499204/palets1-520.jpg/f4553537-b119-c6b0-b347-5156dcd1c660?t=1638258916000&e=jpg&imwidth=640&imdensity=1",
    },
    {
      id: "push-back",
      title: "Push Back Racking",
      description:
        "Compact storage with good selectivity using gravity-fed carts.",
      image:
        "https://mecaluxcom.cdnwm.com/documents/20128/499204/miniload-transportador-operarios-520.jpg/d808378b-38ef-fd6a-bacd-130489eef1fc?t=1638258893000&e=jpg&imwidth=640&imdensity=1",
    },
  ];

  const sizeOptions: RackingOption[] = [
    {
      id: "small",
      title: "Small System",
      description: "Up to 10 bays, ideal for small warehouses.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "medium",
      title: "Medium System",
      description: "10-30 bays, suitable for mid-sized operations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "large",
      title: "Large System",
      description:
        "30+ bays, designed for large warehouses and distribution centers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
  ];

  const capacityOptions: RackingOption[] = [
    {
      id: "light",
      title: "Light Duty",
      description: "Up to 1,000kg per level, suitable for lighter goods.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "medium",
      title: "Medium Duty",
      description: "1,000-2,500kg per level, for standard palletized goods.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: "heavy",
      title: "Heavy Duty",
      description:
        "2,500kg+ per level, designed for the heaviest industrial loads.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
  ];

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleTypeSelect = (id: string) => {
    setSelectedType(id);
  };

  const handleSizeSelect = (id: string) => {
    setSelectedSize(id);
  };

  const handleCapacitySelect = (id: string) => {
    setSelectedCapacity(id);
  };

  const handleSubmit = () => {
    console.log("Configuration submitted:", {
      type: selectedType,
      size: selectedSize,
      capacity: selectedCapacity,
    });
    // In a real application, you would submit this data to the server
    alert(
      "Your configuration has been submitted. A sales representative will contact you shortly."
    );
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lazioDarkGray mb-4">
            Build Your Racking System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our simple 3-step process to configure a racking system that
            perfectly meets your storage needs.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div
              className={`flex flex-col items-center ${
                activeStep >= 1 ? "text-lazioBlue" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep >= 1 ? "bg-lazioBlue text-white" : "bg-gray-200"
                }`}
              >
                1
              </div>
              <span className="mt-2 text-sm font-medium">Racking Type</span>
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                activeStep >= 2 ? "bg-lazioBlue" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex flex-col items-center ${
                activeStep >= 2 ? "text-lazioBlue" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep >= 2 ? "bg-lazioBlue text-white" : "bg-gray-200"
                }`}
              >
                2
              </div>
              <span className="mt-2 text-sm font-medium">System Size</span>
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                activeStep >= 3 ? "bg-lazioBlue" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex flex-col items-center ${
                activeStep >= 3 ? "text-lazioBlue" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep >= 3 ? "bg-lazioBlue text-white" : "bg-gray-200"
                }`}
              >
                3
              </div>
              <span className="mt-2 text-sm font-medium">Load Capacity</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {activeStep === 1 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Select Racking Type
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rackingTypes.map((option) => (
                  <div
                    key={option.id}
                    className={`builder-option ${
                      selectedType === option.id ? "selected" : ""
                    }`}
                    onClick={() => handleTypeSelect(option.id)}
                  >
                    <div className="aspect-video mb-4 overflow-hidden rounded">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Select System Size
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sizeOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`builder-option ${
                      selectedSize === option.id ? "selected" : ""
                    }`}
                    onClick={() => handleSizeSelect(option.id)}
                  >
                    <div className="aspect-video mb-4 overflow-hidden rounded">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Select Load Capacity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {capacityOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`builder-option ${
                      selectedCapacity === option.id ? "selected" : ""
                    }`}
                    onClick={() => handleCapacitySelect(option.id)}
                  >
                    <div className="aspect-video mb-4 overflow-hidden rounded">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousStep}
              disabled={activeStep === 1}
              className="border-lazioBlue text-lazioBlue"
            >
              Previous
            </Button>
            {activeStep < 3 ? (
              <Button
                className="lazio-button"
                onClick={handleNextStep}
                disabled={
                  (activeStep === 1 && !selectedType) ||
                  (activeStep === 2 && !selectedSize)
                }
              >
                Next
              </Button>
            ) : (
              <Button
                className="lazio-button"
                onClick={handleSubmit}
                disabled={!selectedCapacity}
              >
                Get Quote
              </Button>
            )}
          </div>
        </div>

        <div className="mt-16 bg-lazioGray p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Help with Your Configuration?
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Our team of experts is ready to assist you in creating the perfect
              racking solution for your specific needs.
            </p>
            <Button className="lazio-button">Contact Our Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;
