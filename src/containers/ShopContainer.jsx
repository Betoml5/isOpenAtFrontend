import { Filter } from "../components/Filter";
import { Search } from "../components/Search";
import { Shop } from "../components/Shop";
import { useEffect, useState } from "react";
import { getShops } from "../services/Shop";
// import shops from "../shops";

export const ShopContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getShops(setData);
    console.log(data);
  }, []);
  return (
    <>
      <div className="grid mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Search />
        <Filter />
        {data.map((shop) => (
          <Shop {...shop} key={shop.id} />
        ))}
      </div>
    </>
  );
};
