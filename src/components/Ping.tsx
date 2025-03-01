import React from 'react';
import PingImage from 'public/Ping.svg';

interface PingProps {
  width?: number;
  height?: number;
  size?: number;
  className?: string;
}

const Ping: React.FC<PingProps> = ({ className, width, height, size }) => {
  const finalWidth = size ?? width ?? 14;
  const finalHeight = size ?? height ?? 14;

  return (
    <img
      className={className}
      src={PingImage.src}
      alt="Ping"
      width={finalWidth}
      height={finalHeight}
    />
  );
};

export default Ping;
