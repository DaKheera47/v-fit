import {
  DesignSelectorContext,
  DesignSelectorProvider,
} from '@/components/DesignSelector/DesignSelectorContext';
import type { DesignItems } from '@/components/DesignSelector/design-items';
import SelectableItem from './SelectableItem';
import DesignSelectorOutput from './DesignSelectorOutput';

interface Props {
  items: DesignItems;
}

export default function DesignSelector({ items }: Props) {
  return (
    <DesignSelectorProvider>
      <div className="mx-auto flex w-full items-center space-x-8">
        <div className="grid grid-cols-3 gap-8">
          {items.map((item, index) => (
            <SelectableItem key={index} {...item} idx={index} />
          ))}
        </div>

        <DesignSelectorContext.Consumer>
          {({ transformedImage }) =>
            transformedImage && (
              <SelectableItem
                url={transformedImage.url}
                title="Your design"
                idx={items.length}
              />
            )
          }
        </DesignSelectorContext.Consumer>
      </div>
    </DesignSelectorProvider>
  );
}
