import type { SelectableItemProps } from '@/components/DesignSelector/SelectableItem';

export type DesignItems = Pick<SelectableItemProps, 'title' | 'url'>[];

export const DESIGN_ITEMS: DesignItems = [
  {
    title: 'Design 1',
    url: '/images/designs/design1.webp',
  },
  {
    title: 'Design 2',
    url: '/images/designs/design1.webp',
  },
  {
    title: 'Design 3',
    url: '/images/designs/design1.webp',
  },
  {
    title: 'Design 4',
    url: '/images/designs/design1.webp',
  },
  {
    title: 'Design 5',
    url: '/images/designs/design1.webp',
  },
  {
    title: 'Design 6',
    url: '/images/designs/design1.webp',
  },
];
