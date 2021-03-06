import { useEffect, useState } from "react";
import { FiCode } from "react-icons/fi";
import { useConsole } from "store/consoleStore";
import { useBlocks } from "store/blocksStore";
import { avilableBlocks, BaseBlocks } from "data/nativeBaseComponents";
import { properties } from "data/nativeBaseProperties";
import { v4 as uuidv4 } from "uuid";

export const Console: React.FC = () => {
  const [tip, setTip] = useState(false);
  const [foundCommands, findCommands] = useState<BaseBlocks>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const command: string = useConsole((state) => state.command);
  const runCommand: string = useConsole((state) => state.runCommand);
  const stamp: string = useConsole((state) => state.stamp);

  const blocks = useBlocks((state) => state.blocks);
  const selectedBlockId = useBlocks((state) => state.selectedBlockId);
  const block = () => blocks.find((x) => x.id === selectedBlockId);
  const addBlock = useBlocks((state) => state.addBlock);
  const setBlockAttrs = useBlocks((state) => state.setBlockAttrs);

  const dictionary = [
    ...Object.values(avilableBlocks).flat(),
    ...Object.values(properties),
  ] as BaseBlocks;

  function find(items: BaseBlocks, text: string) {
    const splited = text.split(" ");
    return items.filter((item) => {
      return splited.every((el) => {
        return (item.label.toLowerCase() + item.block).includes(el);
      });
    });
  }

  useEffect(() => {
    setTip(true);
    setSelectedIndex(0);
    if (command.substring(0, 4) == "add:") {
      findCommands([
        {
          label: "Insert as child",
          block: `${foundCommands[selectedIndex]?.block}`,
          type: "child",
        },
        {
          label: "Insert as slibling",
          block: `${foundCommands[selectedIndex]?.block}`,
          type: "slibling",
        },
      ]);
    } else {
      findCommands(find(dictionary, command));
    }
  }, [command]);

  useEffect(() => {
    if (runCommand == "Enter") {
      const split = command.split(":");
      // select from properties list
      if (foundCommands[selectedIndex]?.type == "block") {
        useConsole.setState({
          command: `add:${foundCommands[selectedIndex]?.block}`,
        });
      } else {
        useConsole.setState({
          command: `set:${
            foundCommands[selectedIndex]?.block
              ? foundCommands[selectedIndex]?.block
              : ""
          }`,
        });
      }

      // select child or slibling
      if (command.substring(0, 4) == "add:") {
        useConsole.setState({
          command: `add:${foundCommands[selectedIndex]?.block}:${foundCommands[selectedIndex]?.type}`,
        });
        addBlock({
          id: uuidv4(),
          parentId:
            foundCommands[selectedIndex]?.type === "child"
              ? block()?.id
              : block()?.parentId,
          block: split[1],
          attrs: {},
          layout: "",
          post: "",
        });
      }

      // try run command
      if (split[0] == "set") {
        setBlockAttrs({
          key: split[1],
          value: split[2],
        });
      }
    }

    if (runCommand == "ArrowDown") {
      setSelectedIndex(selectedIndex + 1);
    }

    if (runCommand == "ArrowUp") {
      setSelectedIndex(selectedIndex - 1);
    }

    if (runCommand == "Tab") {
      setTabIndex(tabIndex >= blocks.length - 1 ? 0 : tabIndex + 1);
      useBlocks.setState({ selectedBlockId: blocks[tabIndex]?.id });
    }
  }, [stamp]);

  return (
    <div className="absolute flex items-center left-2 bottom-2 bg-white text-gray-600 shadow">
      <div className="absolute z-10 bottom-9 w-max text-xs text-pink-400 font-mono">
        {!command && runCommand ? (
          <span>Last run: {runCommand}</span>
        ) : (
          command.split(":")[0] == 'set' ?
          <span>syntax set:propName:value</span> :
          <span>type: help</span>
        )}
      </div>
      {tip && (
        <div className="absolute z-20 shadow flex py-2 flex-col gap-2 bottom-14 w-max text-xs">
          {command == "help" || command == "?" ? (
            <>
              <div className="px-2">Dont click, just start typing...</div>
              <div className="bg-pink-400 text-white px-2 p-2">Commands</div>
              <div className="px-2">add:$blockname:child</div>
              <div className="px-2">add:$blockname:slibling</div>
              <div className="px-2">set:$propertyname</div>
              <div className="px-2">help</div>
              <div className="bg-pink-400 text-white px-2 p-2">Keys</div>
              <div className="px-2">
                Tab: is typing autoselect <br />
                or walking around components
              </div>
              <div className="px-2">
                Shift + Tab: reverse walking <br />
                around components
              </div>
            </>
          ) : command != "" ? (
            <>
              {foundCommands.length != 0 && (
                <div className="p-2 text-gray-600">Use arrows</div>
              )}
              {foundCommands.map((el, i) => {
                return (
                  <div
                    className={`px-2 ${
                      i == selectedIndex
                        ? "border-b-2 border-blue-600"
                        : undefined
                    }`}
                  >
                    {el.label}
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      )}
      <div
        onClick={() =>
          useConsole.setState({
            command: "help",
          })
        }
        className="border-1 p-2 bg-pink-600 text-white cursor-pointer"
      >
        <FiCode />
      </div>
      {command && <div className="p-1 px-2 text-sm font-mono">{command}</div>}
    </div>
  );
};
