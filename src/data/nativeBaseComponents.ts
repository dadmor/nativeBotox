import { BlockType } from "types/blocks";
import { InsertBlocksType } from "store/blocksStore";

type BaseBlocks = Pick<BlockType, "block">[];
type AvilableBlocksType = Record<InsertBlocksType, BaseBlocks>;

// export const avilableBlocks: AvilableBlocksType = {
export const avilableBlocks: any = {
  layout: [
    {
      label: "Box",
      block: "layout/Box",
      type:"block"
    },
    {
      label: "Center",
      block: "layout/Center",
      type:"block"
    },
    {
      label: "Container",
      block: "layout/Container",
      type:"block"
    },
    {
      label: "Flex",
      block: "layout/Flex",
      type:"block"
    },
    {
      label: "HStack",
      block: "layout/HStack",
      type:"block"
    },
    {
      label: "Stack",
      block: "layout/Stack",
      type:"block"
    },
    {
      label: "VStack",
      block: "layout/VStack",
      type:"block"
    },
    {
      label: "ZStack",
      block: "layout/ZStack",
      type:"block"
    },
  ],
  typo: [
    {
      label: "Heading",
      block: "typo/Heading",
      type:"block"
    },
    {
      label: "Text",
      block: "typo/Text",
      type:"block"
    },
  ],
  forms: [
    {
      label: "Button",
      block: "forms/Button",
      type:"block"
    },
    {
      label: "Pressable",
      block: "forms/Pressable",
      type:"block"
    },
  ],
  native: [
    {
      label: "Button",
      block: "forms/Button",
      type:"block"
    },
  ],
  rest: [
    {
      label: "Button",
      block: "forms/Button",
      type:"block"
    },
  ],
};
