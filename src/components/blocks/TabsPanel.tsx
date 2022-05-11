import { useBlocks } from "store/blocksStore";

export const TabsPanel: React.FC = () => {
  const composerTab = useBlocks((state) => state.composerTab);
  return (
    <div className="h-screen">
      <div className="flex border-t border-b text-xs select-none">
        <div
          onClick={(e) => useBlocks.setState({ composerTab: "pages" })}
          className={`p-3 flex-1 border-r text-center 
            ${composerTab === "pages" ? "bg-gray-100" : "cursor-pointer"}`}
        >
          Pages
        </div>
        <div
          onClick={(e) => useBlocks.setState({ composerTab: "components" })}
          className={`p-3 flex-1 border-r text-center 
            ${composerTab === "components" ? "bg-gray-100" : "cursor-pointer"}`}
        >
          Components
        </div>
        <div
          onClick={(e) => useBlocks.setState({ composerTab: "options" })}
          className={`p-3 flex-1 border-r text-center 
            ${composerTab === "options" ? "bg-gray-100" : "cursor-pointer"}`}
        >
          Options
        </div>
      </div>
      <div className="p-2 text-xs">
        {composerTab === "pages" && <div>Empty panel</div>}
        {composerTab === "components" && <div>Empty panel</div>}
        {composerTab === "options" && <div>Options</div>}
      </div>
    </div>
  );
};
