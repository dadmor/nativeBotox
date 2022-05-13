export const parseCss = (attrs: any) => {
  return `
  ${attrs.bg ? " bg-" + attrs.bg.replace('.', '-') : ""}
  ${attrs.alignSelf ? " self-" + attrs.alignSelf : ""}
  ${attrs.alignItems ? " items-" + attrs.alignItems : ""}
  ${attrs.justifyContent ? " justify-" + attrs.justifyContent : ""}
  ${attrs.rounded ? " rounded-" + attrs.rounded : ""}
  ${attrs.flex ? " flex-" + attrs.flex : ""}
  ${attrs.direction ? " flex-" + attrs.direction : "flex-col"}
  ${attrs.w ? " w-" + attrs.w : ""}
  ${attrs.h && attrs.h.slice(-1) != '%' ? " h-" + attrs.h : ""}
  ${attrs.p ? " p-" + attrs.p : ""}
  ${attrs.px ? " px-" + attrs.px : ""}
  ${attrs.py ? " py-" + attrs.py : ""}
  ${attrs.pt ? " pt-" + attrs.pt : ""}
  ${attrs.pb ? " pb-" + attrs.pb : ""}
  ${attrs.pl ? " pl-" + attrs.pl : ""}
  ${attrs.pr ? " pr-" + attrs.pr : ""}
  ${attrs.m ? " m-" + attrs.m : ""}
  ${attrs.mx ? " mx-" + attrs.mx : ""}
  ${attrs.my ? " my-" + attrs.my : ""}
  ${attrs.mt ? " mt-" + attrs.mt : ""}
  ${attrs.mb ? " mb-" + attrs.mb : ""}
  ${attrs.ml ? " ml-" + attrs.ml : ""}
  ${attrs.mr ? " mr-" + attrs.mr : ""}
  `.trim();
};

export const parseStyle = (attrs: any) => {

}


export const prevStyle = (preview: boolean) => {
  return !preview
    ? { minHeight: "30px", minWidth: "30px", outline: "0.5px dotted #eee" }
    : undefined;
};
