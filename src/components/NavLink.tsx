
import React from 'react';
import { NavLink as RouterNavLink, NavLinkProps as RouterNavLinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps extends RouterNavLinkProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ icon, children, className, ...props }: NavLinkProps) => {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        cn('nav-link', isActive ? 'active' : '', className)
      }
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </RouterNavLink>
  );
};

export default NavLink;
