import { useBlocks } from "store/blocksStore";
interface Props {
  keyName: string;
}
export const TextareaField: React.FC<Props> = ({ keyName }) => {
  const blocks = useBlocks((state) => state.blocks);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const block = () => blocks.find((x) => x.id === selectedBlockId);
  const setBlockAttrs = useBlocks((state) => state.setBlockAttrs);
  return (
    <textarea
      onChange={(e) => setBlockAttrs({ key: keyName, value: e.target.value })}
      /* TODO fix type */
      // @ts-ignore: Unreachable code error
      rows="3"
      className="border p-2 w-full h-full"
      value={block()?.attrs[keyName]}
    />
  );
};
