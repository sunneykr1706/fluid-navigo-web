
import React from 'react';
import PageTransition from '@/components/PageTransition';
import IndianStockTable from '@/components/IndianStockTable';
import { useStockWebSocket } from '@/hooks/useStockWebSocket';

const About = () => {
  // Initialize the WebSocket connection for stock updates
  useStockWebSocket();

  return (
    <PageTransition>
      <div className="page-container">
        <section className="page-section">
          <h1 className="section-heading">About</h1>
          <p className="section-subheading">
            Learn about our philosophy and approach to design.
          </p>
        </section>

        <section className="page-section">
          <h2 className="text-2xl font-semibold mb-4">Indian Stock Market</h2>
          <p className="text-muted-foreground mb-6">
            Track live Indian market data with real-time updates. Click column headers to sort.
          </p>
          <IndianStockTable />
        </section>

        <section className="page-section max-w-3xl mt-10">
          <div className="prose prose-slate">
            <p className="text-lg leading-relaxed">
              At Navigo, we believe that design should be both beautiful and functional. Our approach is guided by the principles of simplicity, clarity, and purpose.
            </p>
            
            <h3 className="text-xl font-medium mt-8 mb-4">Our Philosophy</h3>
            <p className="mb-4">
              We draw inspiration from the philosophies of design legends who believe that good design is as little design as possible. We strive to create interfaces that get out of the way, allowing users to focus on what truly matters.
            </p>
            
            <div className="my-8 bg-muted rounded-lg p-6">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Good design is innovative. Good design makes a product useful. Good design is aesthetic. Good design makes a product understandable."
              </blockquote>
            </div>
            
            <h3 className="text-xl font-medium mt-8 mb-4">Our Approach</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-medium">01</span>
                </div>
                <div>
                  <h4 className="font-medium">Simplicity</h4>
                  <p className="text-muted-foreground">We eliminate the unnecessary to highlight what matters most.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-medium">02</span>
                </div>
                <div>
                  <h4 className="font-medium">Clarity</h4>
                  <p className="text-muted-foreground">Every element has a purpose and communicates clearly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-medium">03</span>
                </div>
                <div>
                  <h4 className="font-medium">Attention to Detail</h4>
                  <p className="text-muted-foreground">The small details create an exceptional overall experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
