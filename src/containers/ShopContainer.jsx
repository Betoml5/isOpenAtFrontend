import Filter from "../components/Filter";
import Search from "../components/Search";
import Shop from "../components/Shop";
import { useEffect, useState } from "react";
import { getShops } from "../services/Shop";

import PageLoader from "../components/PageLoader";
import { useContext } from "react";
import Context from "../context/userContext";

// import shops from "../shops";

const ShopContainer = () => {
  
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops(setShops);
    console.log(shops);
    return () => setShops([]);
  }, []);


  return (
    <>
      <div className="grid  mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Search />
        <Filter />
        {shops.length == 0 && <PageLoader />}
        {shops.map((shop) => (
          <Shop {...shop} key={shop._id} />
        ))}
      </div>
    </>
  );
};

export default ShopContainer;
