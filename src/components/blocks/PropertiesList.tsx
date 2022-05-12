import { useBlocks } from "store/blocksStore";
import { BlocksHeader } from "./partialsViews/BlocksHeader";
import { properties } from "data/nativeBaseProperties";

export const PropertiesList: React.FC = () => {
  const blocks = useBlocks((state) => state.blocks);
  const setBlockAttrs = useBlocks((state) => state.setBlockAttrs);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const block = () => blocks.find((x) => x.id === selectedBlockId);

  return (
    <div>
      <BlocksHeader title={block()?.block || ""} />
      <div className="py-2 text-xs">
        <div className="px-2 pb-2 text-lg border-b">Properties list</div>
        {Object.keys(properties).map((key, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setBlockAttrs({
                  key: key,
                  value: properties[key].default,
                });
                useBlocks.setState({ panel: "block" });
              }}
              className="text-blue-500 border-b px-2 py-1 hover:bg-gray-100 cursor-pointer"
            >
              {properties[key].label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
