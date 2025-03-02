import { DesignSelectorContext } from '@/components/DesignSelector/DesignSelectorContext';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import React, { useContext } from 'react';

export interface Image {
  url: string;
}

export interface SelectableItemProps extends Image {
  title: string;
  idx: number;
}

const SelectableItem: React.FC<SelectableItemProps> = ({ url, title, idx }) => {
  const { selectionIdx, setSelectionIdx } = useContext(DesignSelectorContext);
  const isSelected = selectionIdx === idx;

  return (
    <div
      onClick={() => setSelectionIdx(idx)}
      className={cn(
        'relative flex cursor-pointer flex-col items-center rounded-lg bg-neutral-900 p-4 ring transition-all duration-300 hover:ring-neutral-400',
        isSelected
          ? 'opacity-100 hover:ring-white'
          : 'opacity-50 ring-neutral-700'
      )}
    >
      <img src={url} alt={title} className="max-h-64 object-contain" />

      <p className="mt-2 text-lg font-medium text-white">{title}</p>

      <div
        className={cn(
          'absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-transparent text-white ring ring-white transition-all duration-300',
          isSelected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
      >
        <Check className="h-3 w-3" />
      </div>
    </div>
  );
};

export default SelectableItem;
