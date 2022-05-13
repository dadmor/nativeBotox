import { v4 as uuidv4 } from "uuid";

export const consoleKeyDown = (e: any, command) => {
  switch (e.key) {
    case "Alt":
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowRight":
    case "ArrowLeft":
    case "CapsLock":
    case "Control":
    case "Shift":
      return { runCommand: e.key, stamp: uuidv4() };
    case "Tab":
      e.preventDefault();
      return { runCommand: e.key, stamp: uuidv4(), command: "" };
    case "Enter":
      return { runCommand: e.key, stamp: uuidv4() };
    case "Backspace":
      return {
        runCommand: e.key,
        stamp: uuidv4(),
        command: command.slice(0, -1),
      };
    case "Escape":
    case "Delete":
      return { runCommand: e.key, stamp: uuidv4(), command: "" };
    default:
      return { command: command + e.key };
  }
};
