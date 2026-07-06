import React from "react";

export default function ProductDescription() {
  return (
    <>
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="flex border-b border-gray-200 mb-8">
          <button className="px-6 py-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 focus:outline-none">
            Description
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">
            Reviews (124)
          </button>
        </div>

        <div className="prose prose-sm text-gray-600">
          <p className="mb-4 leading-relaxed">
            Elevate your daily rotation with the LuxeAura Minimalist Silk Shirt.
            Crafted from our signature 22-momme mulberry silk, this piece offers
            a weightless feel and a luminous finish that transitions
            effortlessly from day to night.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Relaxed fit for modern comfort</li>
            <li>Concealed button placket</li>
            <li>Curved hem for versatile styling</li>
            <li>Oeko-Tex Standard 100 Certified</li>
          </ul>
        </div>
      </div>
    </>
  );
}
