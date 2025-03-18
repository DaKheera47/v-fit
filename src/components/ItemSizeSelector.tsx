import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

type Props = {};

export default function ItemSizeSelector({}: Props) {
  return (
    <div>
      <ToggleGroup type="single">
        <ToggleGroupItem size="lg" value="small">S</ToggleGroupItem>
        <ToggleGroupItem size="lg" value="medium">M</ToggleGroupItem>
        <ToggleGroupItem size="lg" value="large">L</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
