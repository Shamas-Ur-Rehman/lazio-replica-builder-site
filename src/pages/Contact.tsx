
import React from 'react';

const Contact = () => (
  <div className="container mx-auto px-4 py-12 flex flex-col items-center">
    <h2 className="text-3xl md:text-5xl font-bold text-lazioBlue mb-6 text-center">Contact Us</h2>
    <div className="max-w-lg w-full bg-white p-6 rounded shadow-md">
      <form className="flex flex-col space-y-4">
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-lazioBlue" type="text" required />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-lazioBlue" type="email" required />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-lazioBlue" rows={4} required></textarea>
        </div>
        <button type="submit" className="lazio-button mt-2">Send Message</button>
      </form>
      <div className="mt-6 text-center text-gray-600 text-sm">
        Or email us directly at <a className="text-lazioBlue underline" href="mailto:info@happytechtrade.com">info@happytechtrade.com</a>
      </div>
    </div>
  </div>
);

export default Contact;
