import { useBlocks } from "store/blocksStore";
import { BlocksHeader } from "./partialsViews/BlocksHeader";

export const PropertiesList: React.FC = () => {
  const blocks = useBlocks((state) => state.blocks);
  const setBlockAttrs = useBlocks((state) => state.setBlockAttrs);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const block = () => blocks.find((x) => x.id === selectedBlockId);

  const properties: any = {
    alignSelf: {
      type: "string",
      default: "center",
    },
    alignItems: {
      type: "string",
      default: "center",
    },
    borderColor: {
      type: "string",
      default: "gray.500",
    },
    bg: {
      type: "string",
      default: "gray.500",
    },
    fontSize: {
      type: "string",
      default: "xs",
    },
    h: {
      type: "string",
      default: "100%",
    },
    justifyContent: {
      type: "string",
      default: "space-between",
    },
    m: {
      type: "number",
      default: 2,
    },
    ml: {
      type: "number",
      default: 2,
    },
    mr: {
      type: "number",
      default: 2,
    },
    mt: {
      type: "number",
      default: 2,
    },
    mb: {
      type: "number",
      default: 2,
    },
    mx: {
      type: "number",
      default: 2,
    },
    my: {
      type: "number",
      default: 2,
    },
    p: {
      type: "number",
      default: 2,
    },
    pl: {
      type: "number",
      default: 2,
    },
    pr: {
      type: "number",
      default: 2,
    },
    pt: {
      type: "number",
      default: 2,
    },
    pb: {
      type: "number",
      default: 2,
    },
    px: {
      type: "number",
      default: 2,
    },
    py: {
      type: "number",
      default: 2,
    },
    position: {
      type: "string",
      default: "absolue",
    },
    rounded: {
      type: "string",
      default: "lg",
    },
    shadow: {
      type: "number",
      default: 2,
    },
    w: {
      type: "string",
      default: "100%",
    },

    // ---------------
    text: {
      type: "string",
      default: "Lorem ipsum....",
    },
  };

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
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};
