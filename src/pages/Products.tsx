
import React from 'react';
import PageTransition from '@/components/PageTransition';
import StockTable from '@/components/StockTable';
import { useStockWebSocket } from '@/hooks/useStockWebSocket';

const products = [
  {
    id: 1,
    name: 'Precision Series',
    description: 'Crafted with attention to every detail.',
    price: '$199',
    category: 'Premium'
  },
  {
    id: 2,
    name: 'Essence Collection',
    description: 'Minimalist design, maximum functionality.',
    price: '$149',
    category: 'Essential'
  },
  {
    id: 3,
    name: 'Clarity Line',
    description: 'Simple, intuitive, and beautiful.',
    price: '$229',
    category: 'Premium'
  },
  {
    id: 4,
    name: 'Form Series',
    description: 'Where form meets function perfectly.',
    price: '$179',
    category: 'Essential'
  },
  {
    id: 5,
    name: 'Purity Collection',
    description: 'Clean design for the discerning user.',
    price: '$259',
    category: 'Premium'
  },
  {
    id: 6,
    name: 'Harmony Line',
    description: 'Balance in every aspect of design.',
    price: '$129',
    category: 'Value'
  }
];

const Products = () => {
  // Initialize the WebSocket connection for stock updates
  useStockWebSocket();
  
  return (
    <PageTransition>
      <div className="page-container">
        <section className="page-section">
          <h1 className="section-heading">Products</h1>
          <p className="section-subheading">
            Explore our collection of beautifully designed products.
          </p>
        </section>

        <section className="page-section">
          <h2 className="text-2xl font-semibold mb-4">Real-time Stock Market</h2>
          <p className="text-muted-foreground mb-6">
            Track live market data with real-time updates. Click column headers to sort.
          </p>
          <StockTable />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 button-effect"
              >
                <div className="bg-muted aspect-[4/3]"></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <span className="text-sm font-semibold">{product.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {product.category}
                    </span>
                    <button className="text-sm font-medium text-primary hover:underline">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Products;
