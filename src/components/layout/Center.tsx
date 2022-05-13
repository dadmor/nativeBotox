import { memo } from "react";
import { useBlocks, CommonComponentProps } from "store/blocksStore";
import { parseCss, prevStyle } from "helpers/blockHelpers";
const Center: React.FC<CommonComponentProps> = memo(({ attrs, children }) => {
  const preview = useBlocks((state) => state.preview);
  const css = parseCss(attrs);
  return (
    <div style={prevStyle(preview)} className={`relative ${css}`}>
      <div className="grid justify-center items-center">
        {attrs.text && <span>{attrs.text}</span>}
        {children}
      </div>
    </div>
  );
});
export default Center;
