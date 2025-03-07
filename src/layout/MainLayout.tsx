
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      
      <main className={cn(
        "flex-1 ml-0 md:ml-64 transition-all duration-300 ease-in-out",
        className
      )}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
