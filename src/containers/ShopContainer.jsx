import { Filter } from "../components/Filter";
import { Search } from "../components/Search";
import { Shop } from "../components/Shop";
import { useEffect, useState } from "react";
import { getShops } from "../services/Shop";
// import shops from "../shops";

export const ShopContainer = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    getShops(setShops);
    console.log(shops);
  }, []);
  return (
    <>
      <div className="grid  mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Search />
        <Filter />
        {shops.length == 0 && (
          <div className="flex items-center justify-center bg-white text-center col-span-full h-96 rounded-md">
            No hay items que mostrar
          </div>
        )}
        {shops.map((shop) => (
          <Shop {...shop} key={shop.id} />
        ))}
      </div>
    </>
  );
};
