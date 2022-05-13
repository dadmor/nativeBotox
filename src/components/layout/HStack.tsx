import { memo } from "react";
import { useBlocks, CommonComponentProps } from "store/blocksStore";
import { parseCss, prevStyle } from "helpers/blockHelpers";
const HStack: React.FC<CommonComponentProps> = memo(({ attrs, children }) => {
  const preview = useBlocks((state) => state.preview);
  const css = parseCss(attrs);
  return (
    <div style={prevStyle(preview)} className={`relative flex flex-col flex-1 ${css}`}>
      {attrs.innerText && <span>{attrs.innerText}</span>}
      {children}
    </div>
  );
});
export default HStack;
