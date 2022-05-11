import { ComposerView, Tree } from "components/blocks";
import { useBlocks } from "store/blocksStore";
// import { useStickyState } from "helpers/localMockupApi";

const Home: React.FC = () => {
  const blocks = useBlocks((state) => state.blocks);
  return (
    blocks && (
      <div className="bg-gray-50 w-full h-full absolute pt-8 border">
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
      </div>
    )
  );
};
export default Home;
