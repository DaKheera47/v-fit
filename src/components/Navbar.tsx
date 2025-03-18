'use client';
import { cn } from '@/lib/utils';
import { type JSX } from 'react';
import { FancyButton } from './ui/fancy-button';

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-8 rounded-full border border-[#d2dfff7a] bg-white/[0.2] p-1 pl-7 shadow-lg backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50',
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="text hidden sm:block">{navItem.name}</span>
        </a>
      ))}

      <FancyButton as="a" href="/contact" variant="secondary">
        Contact
      </FancyButton>
    </div>
  );
};
