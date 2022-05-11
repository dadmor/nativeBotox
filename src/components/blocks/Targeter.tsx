import { useBlocks } from "store/blocksStore";
import { BlockType } from "types/blocks";

type Props = {
  item: BlockType;
  level: number;
  isLayer?: boolean;
};

export const Targeter: React.FC<Props> = ({ item, level, isLayer }) => {
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const preview = useBlocks((state) => state.preview);
  const setBlock = useBlocks((state) => state.setBlock);

  return !preview ? (
    <>
      <div
        style={{
          top: "-1px",
          left: "-1px",
          zIndex: 998,
          borderTop: "0.5px dashed orange",
          width: "100%",
        }}
        className={`absolute ${
          selectedBlockId == item.id ? "visible" : "invisible"
        }`}
      ></div>
      <div
        style={{
          bottom: "-1px",
          left: "-1px",
          zIndex: 998,
          borderBottom: "0.5px dashed orange",
          width: "100%",
        }}
        className={`absolute ${
          selectedBlockId == item.id ? "visible" : "invisible"
        }`}
      ></div>
      <div
        style={{
          top: "-1px",
          right: "-1px",
          zIndex: 998,
          borderRight: "0.5px dashed orange",
          height: "100%",
        }}
        className={`absolute ${
          selectedBlockId == item.id ? "visible" : "invisible"
        }`}
      ></div>
      <div
        style={{
          top: "-1px",
          left: "-1px",
          zIndex: 998,
          borderLeft: "0.5px dashed orange",
        }}
        className={`absolute h-full ${
          selectedBlockId == item.id ? "visible" : "invisible"
        }`}
      ></div>

      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setBlock(item.id);
          useBlocks.setState({ panel: "block", composerTab: null });
        }}
        className={`w-12 absolute shadow text-xs flex p-1 text-gray-100 cursor-pointer ${
          selectedBlockId == item.id ? "forced-visible" : null
        }`}
        style={{
          alignItems: "center",
          borderTop: "1px solid #00000040",
          borderLeft: "1px solid #00000040",
          borderRight: "1px solid #00000040",
          left: `${level * 18}px`,
          zIndex: level * 1000,
          opacity: selectedBlockId === item.id ? "1" : "0.6",
          top: selectedBlockId === item.id ? "-26px" : "-20px",
          borderRadius: "6px 6px 0 0",
          height: selectedBlockId === item.id ? "26px" : "20px",
          backgroundColor: selectedBlockId === item.id ? "#404040" : "#707070",
        }}
      >
        {level}
      </div>
      <div
        style={{
          right: "3px",
          zIndex: 1000,
        }}
        className={`opacity-50 mt-px absolute rounded bg-gray-800 text-xs text-gray-300 py-px px-1.5 ${
          selectedBlockId == item.id ? "visible" : "invisible"
        }`}
      >
        {item.block}
      </div>
      {isLayer && (
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setBlock(item.id);
            useBlocks.setState({ panel: "block", composerTab: null });
          }}
          className="absolute w-full h-full top-0 left-0"
          style={{
            zIndex: 998,
          }}
        ></div>
      )}
    </>
  ) : (
    <></>
  );
};
