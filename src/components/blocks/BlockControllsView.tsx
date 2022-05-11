/* TODO fix type */
// @ts-ignore
// @ts-nocheck

import {
  FiCornerRightDown,
  FiArrowDown,
  FiExternalLink,
  FiTag,
  FiX,
  FiTrash2,
} from "react-icons/fi";
import { BlocksHeader, BlocksInfoRow } from "components/blocks/partialsViews";
import { useBlocks } from "store/blocksStore";
import {
  InputField,
  TextareaField,
  BackgroundColor,
  NumberField,
  FontSize,
  TextColor,
  Border,
  Button,
} from "components/blocks/blockControlls";

export const BlockControlls: React.FC = () => {
  const blocks = useBlocks((state) => state.blocks);
  const block = () => blocks.find((x) => x.id === selectedBlockId);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const replace = useBlocks((state) => state.replace);
  const removeBlock = useBlocks((state) => state.removeBlock);
  const removeBlockAttr = useBlocks((state) => state.removeBlockAttr);

  const types = {
    NumberField: ["columns", "colspan", "rowspan", "rows"],
    TextareaField: ["text", "mutation"],
    FontSize: ["fontsize"],
  };

  const components = {
    TextareaField: TextareaField,
    BackgroundColor: BackgroundColor,
    NumberField: NumberField,
    FontSize: FontSize,
    TextColor: TextColor,
    Border: Border,
    InputField: InputField,
  };

  const getFieldByKey = (key) => {
    const out = false;
    for (const [typeKey, typeValues] of Object.entries(types)) {
      typeValues.includes(key) ? (out = typeKey) : false;
    }
    return out;
  };
  return (
    <>
      <BlocksHeader title={block()?.block || ""} />
      <div className="text-xs pt-1">
        <BlocksInfoRow value={block()?.id || ""} label="ID" />
        <BlocksInfoRow value={block()?.parentId || ""} label="ParentID" />
      </div>
      <div className="text-xs px-2 pb-2 pt-1">
        {Object.keys(block()?.attrs || {}).map((key, index) => {
          const field = getFieldByKey(key);
          const Component = field
            ? components[field]
            : components["InputField"];
          return !replace ? (
            <div key={index} className="grid grid-cols-10 mt-1 gap-1">
              <div className="col-span-3 py-2 text-gray-600">{key}</div>
              <div className="col-span-6">
                <Component keyName={key} />
              </div>
              <Button
                type="secondary"
                onClick={() => {
                  removeBlockAttr({ id: selectedBlockId, key: key });
                }}
              >
                <FiX />
              </Button>
            </div>
          ) : null;
        })}
        <Button
          type="secondary"
          className="mt-2"
          onClick={(e) => useBlocks.setState({ panel: "insertProps" })}
        >
          <FiTag />
          <span className="ml-2">Insert properties</span>
        </Button>
      </div>

      {!replace ? (
        <div className="px-2 border-t pt-2 grid grid-cols-2 gap-1 text-sm">
          <Button onClick={(e) => useBlocks.setState({ panel: "insertChild" })}>
            <FiCornerRightDown />
            <span className="ml-2">Insert child</span>
          </Button>
          <Button onClick={(e) => useBlocks.setState({ panel: "insertNext" })}>
            <FiArrowDown />
            <span className="ml-2">Insert sibling</span>
          </Button>
          <Button onClick={(e) => useBlocks.setState({ replace: true })}>
            <FiExternalLink />
            <span className="ml-2">Teleport block</span>
          </Button>
          <Button
            type="error"
            onClick={(e) => {
              useBlocks.setState({ panel: "tabsPanel" });
              removeBlock();
            }}
          >
            <FiTrash2 />
            <span className="ml-2">Remove</span>
          </Button>
        </div>
      ) : (
        <div className="text-xs p-2 border-t border-b bg-yellow-100">
          Select target to teleport
        </div>
      )}
    </>
  );
};
