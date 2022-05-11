import { FiCornerRightDown, FiArrowDown } from "react-icons/fi";
import { BlocksHeader } from "components/blocks/partialsViews";
import { useBlocks, InsertBlocksType } from "store/blocksStore";
import { v4 as uuidv4 } from "uuid";
import { BlockType } from "types/blocks";
import { Button } from "./blockControlls";

type BaseBlocks = Pick<BlockType, "block">[];

type AvilableBlocksType = Record<InsertBlocksType, BaseBlocks>;

type TypeKinds = "child" | "next";

interface Props {
  type: TypeKinds;
}

const avilableBlocks: AvilableBlocksType = {
  layout: [
    {
      block: "layout/Grid",
    },
    {
      block: "layout/Box",
    },
    {
      block: "layout/Center",
    },
    {
      block: "layout/Container",
    },
    {
      block: "layout/Flex",
    },
    {
      block: "layout/HStack",
    },
    {
      block: "layout/Stack",
    },
    {
      block: "layout/VStack",
    },
    {
      block: "layout/ZStack",
    },
  ],
  typo: [
    {
      block: "typo/Heading",
    },
    {
      block: "typo/Text",
    },
  ],
  forms: [
    {
      block: "forms/Button",
    },
    {
      block: "forms/Pressable",
    },
  ],
  native: [
    {
      block: "forms/Button",
    },
  ],
  rest: [
    {
      block: "forms/Button",
    },
  ],
};

export const InsertBlock: React.FC<Props> = ({ type }) => {
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const blocks = useBlocks((state) => state.blocks);
  const block = () => blocks.find((x) => x.id === selectedBlockId);
  const insertBlocksType = useBlocks((state) => state.insertBlocksType);
  const addBlock = useBlocks((state) => state.addBlock);
  const prefix = {
    id: uuidv4(),
    parentId: type === "next" ? block()?.parentId : block()?.id,
    layout: "",
    post: "",
  };

  return (
    <>
      <BlocksHeader title={block()?.block || ""} />
      <div className="p-2">
        {type === "child" && <FiCornerRightDown />}
        {type === "next" && <FiArrowDown />}
        Insert {type} block
      </div>
      <div className="flex border-t border-b mb-2 text-xs">
        {(Object.keys(avilableBlocks) as InsertBlocksType[]).map(
          (key, index) => {
            return (
              <div
                onClick={(e) => useBlocks.setState({ insertBlocksType: key })}
                className={`p-3 flex-1 border-r text-center 
                ${insertBlocksType === key ? "bg-gray-100" : "cursor-pointer"}`}
              >
                {key}
              </div>
            );
          }
        )}
      </div>
      <div className="px-2 grid gap-1 text-xs">
        {avilableBlocks[insertBlocksType].map((block, i) => {
          return (
            <Button
              onClick={() => {
                addBlock({
                  ...prefix,
                  block: block.block,
                  attrs: {},
                });
              }}
            >
              {block.block}
            </Button>
          );
        })}
      </div>
    </>
  );
};
