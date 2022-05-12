let command = "";
const valut: { type: string; command: string } = {
  type: "",
  command: "",
};
export const consoleKeyDown = (e: any) => {
  switch (e.key) {
    case "Tab":
      e.preventDefault();
      valut.type = "Tab";
      valut.command = command;
      return valut;
    case "ArrowUp":
      valut.type = "ArrowUp";
      valut.command = command;
      return valut;
    case "ArrowDown":
      valut.type = "ArrowDown";
      valut.command = command;
      return valut;
    case "ArrowRight":
      valut.type = "ArrowRight";
      valut.command = command;
      return valut;
    case "Alt":
      valut.type = "Alt";
      valut.command = command;
      return valut;
    case "Shift":
      valut.type = "Shift";
      valut.command = command;
      return valut;
      case "CapsLock":
        valut.type = "Shift";
        valut.command = command;
        return valut;
    case "Control":
      valut.type = "ArrowUp";
      valut.command = command;
      return valut;
    case "Enter":
      valut.type = "Enter";
      command = "";
      valut.command = command;

      return valut;
    case "Backspace":
      valut.type = "Backspace";
      command = "";
      valut.command = command;

      return valut;
    default:
      command += e.key;
      valut.type = "command";
      valut.command = command;
      return valut;
  }
};
