import { useEffect, useState } from "react";
import ShopPanel from "../components/ShopPanel";
import { getShops } from "../services/Shop";

const ControlPanel = ({ shop }) => {
  // const [shops, setShops] = useState([]);

  // useEffect(() => {
  //   const getShopsFetched = async () => {
  //     const shopsFetched = await getShops();
  //     setShops(shopsFetched);
  //   };

  //   getShopsFetched();

  //   return () => {
  //     setShops([]);
  //   };
  // }, []);

  return (
    <>
      <ShopPanel {...shop} key={shop?._id} />
    </>
  );
};

export default ControlPanel;
