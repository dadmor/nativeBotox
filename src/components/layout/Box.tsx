import { memo } from "react";
import { useBlocks, CommonComponentProps } from "store/blocksStore";
import { parseCss, prevStyle } from "helpers/blockHelpers";
const Box: React.FC<CommonComponentProps> = memo(({ attrs, children }) => {
  const preview = useBlocks((state) => state.preview);
  const css = parseCss(attrs);
  return (
    <div style={prevStyle(preview)} className={`relative flex flex-col ${css}`}>
      {attrs.text && <span>{attrs.text}</span>}
      {children}
    </div>
  );
});
export default Box;
