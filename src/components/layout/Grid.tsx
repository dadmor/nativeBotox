import { memo } from "react";
import { useBlocks, CommonComponentProps } from "store/blocksStore";

const Grid: React.FC<CommonComponentProps> = memo(({ attrs, children }) => {
  const preview = useBlocks((state) => state.preview);
  return (
    <div
      style={
        !preview ? { minHeight: "30px", outline: "1px solid #eee" } : undefined
      }
      className={`relative grid`}
    >
      {children}
    </div>
  );
});
export default Grid;
