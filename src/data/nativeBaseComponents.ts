import { BlockType } from "types/blocks";
import { InsertBlocksType } from "store/blocksStore";

type BaseBlocks = Pick<BlockType, "block">[];
type AvilableBlocksType = Record<InsertBlocksType, BaseBlocks>;

// export const avilableBlocks: AvilableBlocksType = {
export const avilableBlocks: any = {
  layout: [
    {
      label: "Box block",
      block: "layout/Box",
      type:"block"
    },
    {
      label: "Center block",
      block: "layout/Center",
      type:"block"
    },
    {
      label: "Container block",
      block: "layout/Container",
      type:"block"
    },
    {
      label: "Flex block",
      block: "layout/Flex",
      type:"block"
    },
    {
      label: "HStack block",
      block: "layout/HStack",
      type:"block"
    },
    {
      label: "Stack block",
      block: "layout/Stack",
      type:"block"
    },
    {
      label: "VStack block",
      block: "layout/VStack",
      type:"block"
    },
    {
      label: "ZStack block",
      block: "layout/ZStack",
      type:"block"
    },
  ],
  typo: [
    {
      label: "Heading block",
      block: "typo/Heading",
      type:"block"
    },
    {
      label: "Text  block",
      block: "typo/Text",
      type:"block"
    },
  ],
  forms: [
    {
      label: "Button block",
      block: "forms/Button",
      type:"block"
    },
    {
      label: "Pressable block",
      block: "forms/Pressable",
      type:"block"
    },
  ],
  native: [
    {
      label: "Button block",
      block: "forms/Button",
      type:"block"
    },
  ],
  rest: [
    {
      label: "Button block",
      block: "forms/Button",
      type:"block"
    },
  ],
};
