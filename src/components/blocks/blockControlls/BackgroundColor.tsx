import { useBlocks } from "store/blocksStore";
import { blockType, blocksType } from "types/blocks";
interface Props {
  keyName: string;
}
export const BackgroundColor: React.FC<Props> = ({ keyName }) => {
  const blocks: blocksType = useBlocks((state) => state.blocks);
  const block: blockType = () =>
    blocks.find((x: any) => x.id === selectedBlockId);

  const setBlockAttrs = useBlocks((state) => state.setBlockAttrs);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  return (
    <select
      className="col-span-3 border bg-white"
      onChange={(e) => setBlockAttrs({ key: keyName, value: e.target.value })}
    >
      <option selected={block()?.attrs[keyName] === ""} value="">
        Empty definition
      </option>
      <option
        selected={block()?.attrs[keyName] === "main-background"}
        value="main-background"
      >
        Main background
      </option>
      <option
        selected={block()?.attrs[keyName] === "light-background"}
        value="light-background"
      >
        Lignt background
      </option>
      <option
        selected={block()?.attrs[keyName] === "dark-background"}
        value="dark-background"
      >
        Dark background
      </option>
      <option
        selected={block()?.attrs[keyName] === "action-background"}
        value="action-background"
      >
        Action background
      </option>
      <option
        selected={block()?.attrs[keyName] === "main-background-gradient"}
        value="main-background-gradient"
      >
        Main background gradient
      </option>
    </select>
  );
};
