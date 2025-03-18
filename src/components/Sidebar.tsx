
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, HomeIcon, BoxesIcon, InfoIcon, MailIcon, LineChartIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavLink from './NavLink';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-background shadow-sm border md:hidden"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <XIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </button>

      {/* Backdrop (mobile only) */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transition-transform duration-300 ease-in-out",
          isMobile && !isOpen && "-translate-x-full",
          isMobile && isOpen && "translate-x-0",
          !isMobile && "translate-x-0",
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <h1 className="text-xl font-semibold">StockTracker</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3">
            <ul className="space-y-1">
              <li>
                <NavLink to="/" icon={<HomeIcon className="h-4 w-4" />}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" icon={<LineChartIcon className="h-4 w-4" />}>
                  US Stocks
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" icon={<InfoIcon className="h-4 w-4" />}>
                  Indian Stocks
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" icon={<MailIcon className="h-4 w-4" />}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StockTracker
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
