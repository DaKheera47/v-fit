import React from 'react';
import PingImage from '@/assets/Ping.svg';

interface PingProps {
  width?: number;
  height?: number;
  size?: number;
  className?: string;
  scaleFactor?: number; // New prop for controlling effect scale
}

const Ping: React.FC<PingProps> = ({ 
  className, 
  width, 
  height, 
  size, 
  scaleFactor = 50 // Default scale factor
}) => {
  const finalWidth = size ?? width ?? 14;
  const finalHeight = size ?? height ?? 14;

  return (
    <img
      className={className}
      src={PingImage.src}
      data-ping-effect="true"
      data-ping-scale-factor={scaleFactor}
      alt="Ping"
      width={finalWidth}
      height={finalHeight}
    />
  );
};

export default Ping;