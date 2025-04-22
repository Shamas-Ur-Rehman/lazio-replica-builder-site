
import React from 'react';

const products = [
  { name: 'Selective Racking', desc: 'Versatile storage suited for most warehouses.' },
  { name: 'Drive-In Racking', desc: 'Maximize storage density for uniform products.' },
  { name: 'Push Back Racking', desc: 'Dynamic racking for high-density storage.' },
  { name: 'Cantilever Racking', desc: 'Ideal for long or bulky items.' },
  { name: 'Mezzanine Floors', desc: 'Expand workspace with raised platforms.' },
];

const Products = () => (
  <div className="container mx-auto px-4 py-12">
    <h2 className="text-3xl md:text-5xl font-bold text-lazioBlue mb-8 text-center">Our Products</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <div key={i} className="bg-white rounded shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-lazioDarkBlue">{product.name}</h3>
          <p className="text-gray-600 text-center">{product.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
