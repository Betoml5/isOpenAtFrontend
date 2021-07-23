import Filter from "../components/Filter";
import Search from "../components/Search";
import Shop from "../components/Shop";
import { useEffect, useState } from "react";
import { getShops } from "../services/Shop";
import PageLoader from "../components/PageLoader";

const ShopContainer = () => {
  const [shops, setShops] = useState([]);
  const [filterShops, setFilterShops] = useState([]);

  useEffect(() => {
    const getShopsFetched = async () => {
      const shopsFetched = await getShops();
      setShops(shopsFetched);
    };

    getShopsFetched();
    return () => {
      setShops([]);
      setFilterShops([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (shops.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <h3>No hay comercios aun :(</h3>
  //     </div>
  //   );
  // }

  return (
    <div className="grid  mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <Search setFilterShops={setFilterShops} filterShops={filterShops} />
      <Filter />
      {shops?.length === 0 && <PageLoader />}
      {filterShops?.length > 0
        ? filterShops?.map((shop) => <Shop {...shop} key={shop._id} />)
        : shops?.map((shop) => <Shop {...shop} key={shop._id} />)}
    </div>
  );
};

export default ShopContainer;
