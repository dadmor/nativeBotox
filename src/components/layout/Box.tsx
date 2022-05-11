import { memo } from "react";
interface Props {
  attrs: any;
}
const Box: React.FC<Props> = memo(({ attrs, children }) => {
  const css = `
    ${attrs.alignSelf && "self-" + attrs.alignSelf}
  `;
  return (
    <div
      style={{ outline: "1px solid #eee", minHeight: "20px" }}
      className={`flex flex-col ${css}`}
    >
      {attrs.text && (
        <>
          {attrs.text}
          {css}
        </>
      )}
      {children}
    </div>
  );
});
export default Box;
