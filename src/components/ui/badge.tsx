import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import Ping from '@/components/Ping';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-4 py-1 w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        custom:
          'border-[#333] bg-gray-to-black text-secondary-foreground [a&]:hover:bg-secondary/90',
      },
    },
    defaultVariants: {
      variant: 'custom',
    },
  }
);

interface BadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  hasPing?: boolean;
  pingScaleFactor?: number;
}

function Badge({
  className,
  variant,
  hasPing = true,
  asChild = false,
  children,
  pingScaleFactor,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {hasPing && <Ping className="mt-0.5 mr-1" size={10} scaleFactor={pingScaleFactor} />}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
