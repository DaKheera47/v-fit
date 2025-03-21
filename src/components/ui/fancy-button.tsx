'use client';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function FancyButton({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  duration = 1,
  clockwise = true,
  variant = 'primary',
  href,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    variant?: 'primary' | 'secondary';
    href?: string;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>('TOP');

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: 'radial-gradient(50% 80% at 50% 0%, hsl(0, 100%, 50%) 0%, rgba(255, 0, 0, 0) 100%)',
    LEFT: 'radial-gradient(50% 80% at 0% 50%, hsl(0, 100%, 50%) 0%, rgba(255, 0, 0, 0) 100%)',
    BOTTOM:
      'radial-gradient(50% 80% at 50% 100%, hsl(0, 100%, 50%) 0%, rgba(255, 0, 0, 0) 100%)',
    RIGHT:
      'radial-gradient(50% 80% at 100% 50%, hsl(0, 100%, 50%) 0%, rgba(255, 0, 0, 0) 100%)',
  };

  const highlight =
    'radial-gradient(100% 200% at 50% 50%, hsl(0, 100%, 50%) 0%, rgba(255, 0, 0, 0) 100%)';

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection(prevState => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex h-min w-fit cursor-pointer flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full bg-black/20 decoration-clone p-px transition duration-500 hover:bg-black/10 dark:bg-white/5',
        containerClassName
      )}
      onClick={() => {
        if (Tag === 'a') {
          window.location.href = href!;
        }
      }}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] px-4 py-2 text-white',
          {
            'bg-[#200909]': variant === 'primary',
            'bg-[#B20023]': variant === 'secondary',
          },
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          'absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]'
        )}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className="absolute inset-[2px] z-1 flex-none rounded-[100px] bg-black" />
    </Tag>
  );
}
