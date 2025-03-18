import { cn } from '@/lib/utils';
import { type FC, useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={cn("-z-10", className)}>
      <img src={images[index]} alt={`Carousel image ${index + 1}`} />
    </div>
  );
};
