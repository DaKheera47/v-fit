import React from 'react';
import PingImage from 'public/Ping.svg';

interface PingProps {
  width?: number;
  height?: number;
  size?: number;
}

const Ping: React.FC<PingProps> = ({ width, height, size }) => {
  const finalWidth = size ?? width ?? 14;
  const finalHeight = size ?? height ?? 14;

  return (
    <img
      src={PingImage.src}
      alt="Ping"
      width={finalWidth}
      height={finalHeight}
    />
  );
};

export default Ping;
