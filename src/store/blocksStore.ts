import create from "zustand";
import produce from "immer";
import { BlockType } from "types/blocks";
import React from "react";

type PanelTypes =
  | "tabsPanel"
  | "block"
  | "insertChild"
  | "insertNext"
  | "insertProps";

export type InsertBlocksType = "layout" | "typo" | "forms" | "native" | "rest";

export interface CommonComponentProps {
  attrs: any;
  level?: number;
  item: any;
}

interface BlockStore {
  panel: PanelTypes;
  composerTab: string | null;
  insertBlocksType: InsertBlocksType;
  preview: boolean;
  replace: boolean;
  components: Record<
    string,
    React.FC<CommonComponentProps> | React.ComponentType<CommonComponentProps>
  >;
  blocks: BlockType[];
  selectedBlockId: number | string | null;
  setComponent(_in: {
    key: string;
    value:
      | React.FC<CommonComponentProps>
      | React.ComponentType<CommonComponentProps>;
  }): void;
  setBlock(id: number | string | null): void;
  addBlock(_in: BlockType): void;
  setBlockAttrs(_in: { key: string; value: any }): void;
  removeBlockAttr(_in: { key: string }): void;
  setBlockParentId(_in: { parent: any; current: any }): void;
  removeBlock(): void;
}

const useBlocks = create<BlockStore>((set) => ({
  panel: "tabsPanel",
  composerTab: "page",
  insertBlocksType: "layout",
  preview: false,
  replace: false,
  components: {},
  blocks: [
    {
      id: 1,
      parentId: 0,
      block: "layout/Grid",
      layout: null,
      post: "home",
      attrs: {
        columns: "",
        colspan: "",
        rowspan: "",
        background: "",
      },
    },
    {
      id: 2,
      parentId: 0,
      block: "layout/Title",
      layout: null,
      post: "home",
      attrs: {
        text: "aaa",
      },
    },
  ],
  selectedBlockId: null,
  setComponent: (_in) =>
    set(
      produce<BlockStore>((_) => {
        _.components[_in.key] = _in.value;
      })
    ),
  setBlock: (id) =>
    set((state) => {
      if (id) state.selectedBlockId = id;
    }),
  addBlock: (_in) =>
    set(
      produce<BlockStore>((_) => {
        _.blocks.push(_in);
      })
    ),
  setBlockAttrs: (_in) =>
    set(
      produce<BlockStore>((_) => {
        const block = _.blocks.find((el) => el.id === _.selectedBlockId);
        if (block) block.attrs[_in.key] = _in.value;
      })
    ),
  removeBlockAttr: (_in) =>
    set(
      produce<BlockStore>((_) => {
        const block = _.blocks.find((el: any) => el.id === _.selectedBlockId);
        if (block) delete block.attrs[_in.key];
      })
    ),
  setBlockParentId: (_in) =>
    set(
      produce<BlockStore>((_) => {
        const block = _.blocks.find((el) => el.id === _in.current);
        if (block) {
          block.parentId = _in.parent;
          _.replace = false;
        }
      })
    ),
  removeBlock: () =>
    set(
      produce<BlockStore>((_) => {
        const i = _.blocks.findIndex((el) => el.id === _.selectedBlockId);
        _.blocks.splice(i, 1);
      })
    ),
}));

export { useBlocks };
