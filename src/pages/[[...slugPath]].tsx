import { ComposerView, Tree } from "components/blocks";
import { Console } from "components/console";
import { useBlocks } from "store/blocksStore";
import { useConsole } from "store/consoleStore";
import { consoleKeyDown } from "helpers/consoleHelpers";

const Home: React.FC = () => {
  const blocks = useBlocks((state) => state.blocks);

  const consoleKeyDownHandler = (e:any) => {
    const key = consoleKeyDown(e)
    useConsole.setState({ command: key.command })
  }
  
  return (
    blocks && (
      // Keyboard events handling layer (for internal console)
      <div
        onKeyDown={(e: React.SyntheticEvent<EventTarget>) => consoleKeyDownHandler(e)}
        contentEditable={true}
      >
        {/* // Unmounted editable content layer dirty hack */}
        {/* // Iam open to disscussion about it */}
        <div
          contentEditable={false}
          className="bg-gray-50 w-full h-full absolute pt-8 border"
        >
          <div
            className="shadow bg-white"
            style={{
              marginLeft: "calc(50% - 280px)",
              width: "320px",
              height: "640px",
            }}
          >
            <Tree blocks={blocks} />
          </div>
          <ComposerView />
          <Console />
        </div>
      </div>
    )
  );
};
export default Home;
