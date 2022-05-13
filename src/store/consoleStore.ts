import create from "zustand";
const useConsole = create(() => ({
  command:"",
  runCommand: "",
  response:"",
  stamp:"",
}));
export { useConsole };
