import React from 'react';

interface DesignSelectorOutputProps {
  imageUrl: string;
  message: string;
}

const DesignSelectorOutput: React.FC<DesignSelectorOutputProps> = ({
  imageUrl,
  message,
}) => {
  return (
    <div className="bg-gray-to-black mx-auto h-full rounded-lg bg-black p-4 text-white shadow-lg ring ring-neutral-700">
      <img
        src={imageUrl}
        alt="you, wearing your design"
        className="w-full rounded-lg object-cover"
      />

      <p className="mt-4 mb-2 text-center text-2xl">{message}</p>
    </div>
  );
};

export default DesignSelectorOutput;
