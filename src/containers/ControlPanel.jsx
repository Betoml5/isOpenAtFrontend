import { useEffect } from "react";
import { useState } from "react";
import ShopPanel from "../components/ShopPanel";
import { getShops } from "../services/Shop";

const ControlPanel = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const getShopsFetched = async () => {
      const shopsFetched = await getShops();
      setShops(shopsFetched);
    };

    getShopsFetched();

    return () => {
      setShops([]);
    };
  }, []);

  return (
    <div>
      {shops?.map((shop) => (
        <ShopPanel {...shop} key={shop?._id} />
      ))}
    </div>
  );
};

export default ControlPanel;
