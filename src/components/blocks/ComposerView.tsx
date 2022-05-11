import { useBlocks } from "store/blocksStore";
import {
  BlockControlls,
  InsertBlock,
  TabsPanel,
  PropertiesList,
} from "components/blocks";

export const ComposerView: React.FC = () => {
  const panel = useBlocks((state) => state.panel);

  return (
    <div className="fixed h-screen shadow border-l border-gray-300 top-0 right-0 w-80 bg-white ">
      {panel == "tabsPanel" && <TabsPanel />}

      {panel == "block" && <BlockControlls />}

      {panel == "insertChild" && <InsertBlock type="child" />}

      {panel == "insertNext" && <InsertBlock type="next" />}

      {panel == "insertProps" && <PropertiesList />}
    </div>
  );
};
