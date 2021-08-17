import ShopPanel from "../components/ShopPanel";
const ControlPanel = ({ shop }) => {
  return (
    <>
      <ShopPanel {...shop} key={shop?._id} />
    </>
  );
};

export default ControlPanel;
