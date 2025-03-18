import { DesignSelectorProvider } from '@/components/DesignSelector/DesignSelectorContext';
import type { DesignItems } from '@/components/DesignSelector/design-items';
import SelectableItem from './SelectableItem';

interface Props {
  items: DesignItems;
}

export default function DesignSelector({ items }: Props) {
  return (
    <DesignSelectorProvider>
      <div className="grid w-4/5 grid-cols-2 gap-8">
        {items.map((item, index) => (
          <SelectableItem key={index} {...item} idx={index} />
        ))}
      </div>
    </DesignSelectorProvider>
  );
}
