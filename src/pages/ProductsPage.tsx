import React from 'react';
import ProductGrid from '../components/products/ProductGrid';

function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      <ProductGrid />
    </div>
  );
}

export default ProductsPage;