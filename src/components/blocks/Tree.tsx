import dynamic from "next/dynamic";
import { memo } from "react";
import { useBlocks } from "store/blocksStore";
import { BlockType } from "types/blocks";
import { Targeter } from "components/blocks";

interface Props {
  blocks: BlockType[];
  parentId?: number;
  level?: number;
}

export const Tree: React.FC<Props> = memo(
  ({ blocks, parentId = 0, level = 0 }: Props) => {
    const items = blocks.filter((item) => item.parentId === parentId);
    if (!items.length) return null;
    const components = useBlocks((state) => state.components);
    const setComponent = useBlocks((state) => state.setComponent);
    return (
      <>
        {items.map((item) => {
          !components[item.block]
            ? setComponent({
                key: item.block,
                value: dynamic(() => import(`components/${item.block}`)),
              })
            : null;
          const Block = components[item.block] && components[item.block];
          return (
            components[item.block] && (
              <Block
                attrs={{ id: item.id, ...item.attrs }}
                key={item.id}
                item={item}
                level={level}
              >
                <Targeter isLayer level={level} item={item} />
                <Tree blocks={blocks} parentId={item.id} level={level + 1} />
              </Block>
            )
          );
        })}
      </>
    );
  }
);
