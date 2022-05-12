import create from "zustand";
const useConsole = create(() => ({
  command:"",
  runCommand: "",
}));
export { useConsole };
