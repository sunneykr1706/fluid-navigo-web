
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-6">
          <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md button-effect"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
