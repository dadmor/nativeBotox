import { useEffect, useState } from "react";
import { FiCode } from "react-icons/fi";
import { useConsole } from "store/consoleStore";

export const Console: React.FC = () => {
  const [tip, setTip] = useState(false);
  const command: string = useConsole((state) => state.command);

  useEffect(() => {
    setTip(true);
  }, [command]);

  return (
    <div className="absolute flex items-center left-4 bottom-4 bg-white text-blue-600 shadow">
      {tip && (
        <div className="absolute shadow flex py-2 flex-col gap-2 bottom-10 w-max text-xs">
          {!command ? (
            <>
              <div className="px-2">Just start typing...</div>
              <div className="bg-pink-400 text-white px-2 p-2">Commands</div>
              <div className="px-2">name:value = set or edit prop</div>
              <div className="px-2">setc:name = insert children</div>
              <div className="px-2">sets:name = insert slibling</div>
              <div className="px-2">help = more about commands</div>
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
          ) : (
            <div>sadsad</div>
          )}
        </div>
      )}
      <div
        onClick={() => setTip(!tip)}
        className="border-1 p-2 bg-pink-600 text-white cursor-pointer"
      >
        <FiCode />
      </div>
      {command && (
        <div className="p-1 px-2 text-sm font-mono">
          {command}
        </div>
      )}
    </div>
  );
};
