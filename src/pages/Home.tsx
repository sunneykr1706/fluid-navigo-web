
import React from 'react';
import PageTransition from '@/components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <section className="page-section">
          <div className="text-sm text-muted-foreground mb-2">Welcome to</div>
          <h1 className="section-heading">Navigo</h1>
          <p className="section-subheading">
            A minimalist, intuitive interface inspired by the best design principles.
          </p>
        </section>

        <section className="max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium mb-2">Clean Design</h3>
              <p className="text-muted-foreground">
                An elegant, uncluttered interface that puts your content first.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium mb-2">Smooth Transitions</h3>
              <p className="text-muted-foreground">
                Navigate between pages with fluid, natural-feeling animations.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium mb-2">Responsive Layout</h3>
              <p className="text-muted-foreground">
                Adapts perfectly to any device or screen size.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium mb-2">Optimized Performance</h3>
              <p className="text-muted-foreground">
                Built for speed with minimal re-rendering and efficient routing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
