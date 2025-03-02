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
      <div className="flex w-full items-center justify-between">
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <SelectableItem key={index} {...item} idx={index} />
          ))}
        </div>

        <DesignSelectorContext.Consumer>
          {({ transformedImage }) =>
            transformedImage && (
              <div className="flex h-full w-2/5 flex-col items-center">
                <DesignSelectorOutput
                  imageUrl={transformedImage.url}
                  message="This is your selected design."
                />
              </div>
            )
          }
        </DesignSelectorContext.Consumer>
      </div>
    </DesignSelectorProvider>
  );
}
