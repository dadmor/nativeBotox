export const parseCss = (attrs: any) => {
  return `
    ${attrs.alignSelf && " self-" + attrs.alignSelf}
    ${attrs.justifyContent && " justify-" + attrs.justifyContent}
    ${attrs.rounded && " rounded-" + attrs.rounded}
    ${attrs.p && " p-" + attrs.p}
    ${attrs.px && " px-" + attrs.px}
    ${attrs.py && " py-" + attrs.py}
    ${attrs.pt && " pt-" + attrs.pt}
    ${attrs.pb && " pb-" + attrs.pb}
    ${attrs.pl && " pl-" + attrs.pl}
    ${attrs.pr && " pr-" + attrs.pr}
    ${attrs.m && " m-" + attrs.m}
    ${attrs.mx && " mx-" + attrs.mx}
    ${attrs.my && " my-" + attrs.my}
    ${attrs.mt && " mt-" + attrs.mt}
    ${attrs.mb && " mb-" + attrs.mb}
    ${attrs.ml && " ml-" + attrs.ml}
    ${attrs.mr && " mr-" + attrs.mr}
  `;
};
export const prevStyle = (preview: boolean) => {
  return !preview
    ? { minHeight: "30px", outline: "1px solid #eee" }
    : undefined;
};
