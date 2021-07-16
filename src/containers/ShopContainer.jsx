import { Filter } from "../components/Filter";
import { Search } from "../components/Search";
import { Shop } from "../components/Shop";
import { useEffect, useState } from "react";
import { getShops, getShopByName } from "../services/Shop";

import { PageLoader } from "../components/PageLoader";

// import shops from "../shops";

export const ShopContainer = () => {
  const [shops, setShops] = useState([]);
  const [filterShops, setFilterShops] = useState([]);

  useEffect(() => {
    getShops(setShops);
    console.log(shops);
  }, []);

  return (
    <>
      <div className="grid  mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Search setFilterShops={setFilterShops} filterShops={filterShops} />
        <Filter />
        {shops?.length == 0 && <PageLoader />}
        {filterShops?.length > 0
          ? filterShops.map((shop) => <Shop {...shop} key={shop.id} />)
          : shops?.map((shop) => <Shop {...shop} key={shop.id} />)}
      </div>
    </>
  );
};
