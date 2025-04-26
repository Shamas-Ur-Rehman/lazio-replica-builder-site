
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Shamas Salaih Hassan",
    role: "Warehouse Manager",
    content: "happytechtrade transformed our warehouse operations. Their racking solutions improved our efficiency by 40%.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    content: "The custom storage solutions provided by happytechtrade perfectly fit our needs. Their team was professional and efficient.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Logistics Coordinator",
    content: "Outstanding service and quality. The installation team was excellent, and the results exceeded our expectations.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-lazioGray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lazioBlue mb-8 sm:mb-10 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="
                relative 
                backdrop-blur-sm 
                bg-white/50 
                border-none 
                shadow-lg 
                hover:shadow-xl 
                transition-shadow 
                duration-300 
                w-full 
                max-w-sm 
                mx-auto
              "
            >
              <CardContent className="p-5 sm:p-6">
                <Quote className="h-6 sm:h-8 w-6 sm:w-8 text-lazioBlue opacity-20 absolute top-4 right-4" />
                <div className="flex space-x-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">"{testimonial.content}"</p>
                <div className="mt-3 sm:mt-4">
                  <p className="text-sm sm:text-base font-semibold text-lazioBlue">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
