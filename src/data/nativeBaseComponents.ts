import { BlockType } from "types/blocks";
import { InsertBlocksType } from "store/blocksStore";

type BaseBlocks = Pick<BlockType, "block">[];
type AvilableBlocksType = Record<InsertBlocksType, BaseBlocks>;

export const avilableBlocks: AvilableBlocksType = {
  layout: [
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
