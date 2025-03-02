import type { Image } from '@/components/DesignSelector/SelectableItem';
import { createContext, useEffect, useState } from 'react';

const DesignSelectorContext = createContext({
  selectionIdx: 0,
  setSelectionIdx: (idx: number) => {},
  transformedImage: undefined as Image | undefined,
  setTransformedImage: (image: Image) => {},
});

const DesignSelectorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectionIdx, setSelectionIdx] = useState(0);
  const [transformedImage, setTransformedImage] = useState<Image>();

  useEffect(() => {
    setTransformedImage({
      url: `https://picsum.photos/202/260?random=${selectionIdx}`,
    });

    return;
    // Fetch the transformed image based on the selection index
    // and set it to the context
    const fetchTransformedImage = async () => {
      const response = await fetch(`/api/transform-image?idx=${selectionIdx}`);
      const data = await response.json();
      setTransformedImage(data);
    };

    fetchTransformedImage();
  }, [selectionIdx]);

  return (
    <DesignSelectorContext
      value={{
        selectionIdx,
        setSelectionIdx,
        transformedImage,
        setTransformedImage,
      }}
    >
      {children}
    </DesignSelectorContext>
  );
};

export { DesignSelectorContext, DesignSelectorProvider };
