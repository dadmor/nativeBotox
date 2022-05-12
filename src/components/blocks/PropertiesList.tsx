import { useBlocks } from "store/blocksStore";
import { BlocksHeader } from "./partialsViews/BlocksHeader";

export const PropertiesList: React.FC = () => {
  const blocks = useBlocks((state) => state.blocks);
  const setBlockAttrs = useBlocks((state) => state.setBlockAttrs);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const block = () => blocks.find((x) => x.id === selectedBlockId);

  const properties: any = {
    alignSelf: {
      label: "align self",
      type: "string",
      default: "center",
    },
    alignItems: {
      label: "align items",
      type: "string",
      default: "center",
    },
    borderColor: {
      label: "border color",
      type: "string",
      default: "gray.500",
    },
    bg: {
      label: "background",
      type: "string",
      default: "gray.500",
    },
    fontSize: {
      label: "font size",
      type: "string",
      default: "xs",
    },
    h: {
      label: "height",
      type: "string",
      default: "100%",
    },
    justifyContent: {
      label: "justify content",
      type: "string",
      default: "space-between",
    },
    m: {
      label: "margin",
      type: "number",
      default: 2,
    },
    ml: {
      label: "margin left",
      type: "number",
      default: 2,
    },
    mr: {
      label: "margin right",
      type: "number",
      default: 2,
    },
    mt: {
      label: "margin top",
      type: "number",
      default: 2,
    },
    mb: {
      label: "margin bottom",
      type: "number",
      default: 2,
    },
    mx: {
      label: "margin horizontal",
      type: "number",
      default: 2,
    },
    my: {
      label: "margin vertical",
      type: "number",
      default: 2,
    },
    p: {
      label: "padding",
      type: "number",
      default: 2,
    },
    pl: {
      label: "padding left",
      type: "number",
      default: 2,
    },
    pr: {
      label: "padding right",
      type: "number",
      default: 2,
    },
    pt: {
      label: "padding top",
      type: "number",
      default: 2,
    },
    pb: {
      label: "padding bottom",
      type: "number",
      default: 2,
    },
    px: {
      label: "padding horizontal",
      type: "number",
      default: 2,
    },
    py: {
      label: "padding vertical",
      type: "number",
      default: 2,
    },
    position: {
      label: "position",
      type: "string",
      default: "absolue",
    },
    rounded: {
      label: "rounded/border radius",
      type: "string",
      default: "lg",
    },
    shadow: {
      label: "shadow",
      type: "number",
      default: 2,
    },
    w: {
      label: "width",
      type: "string",
      default: "100%",
    },

    // ---------------
    text: {
      label: "inner text",
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
              {properties[key].label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
