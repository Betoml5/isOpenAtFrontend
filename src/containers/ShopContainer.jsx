// import Filter from "../components/Filter";
import Search from "../components/Search";
import Shop from "../components/Shop";
import { useEffect, useState } from "react";
import { getShopByName, getShops } from "../services/Shop";
import PageLoader from "../components/PageLoader";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ShopContainer = () => {
  const [shops, setShops] = useState([]);
  const [filterShops, setFilterShops] = useState([]);

  let query = useQuery();

  useEffect(() => {
    const fetchShopByName = async () => {
      const response = await getShopByName(query.get("shop"));

      if (response.length === 0) {
        Swal.fire({
          icon: "error",
          titleText: "No encontrado",
          html: "<p>No encontramos lo que buscabas. </br> 🙃 </br>Pero mira estos negocios</p>",
          confirmButtonText: "OK",
        });
      }
      setFilterShops(response);
    };
    if (query.get("shop")?.length > 0) {
      fetchShopByName();
    }

    return () => {
      setFilterShops([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const shopsFetched = await getShops();
      setShops(shopsFetched);
    };

    fetchData();
    return () => {
      setShops([]);
      setFilterShops([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (shops?.length === 0 && filterShops?.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-4xl">Aún no hay negocios 😓</p>
      </div>
    );
  }

  return (
    <div className="grid mx-2 my-2 gap-2 min-h-screen md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:my-0  ">
      <Search setFilterShops={setFilterShops} filterShops={filterShops} />
      <Helmet>
        <html lang="es" />
        <title>IsOpenAt - Negocios</title>
        <meta name="description" content="Favorites" />
      </Helmet>
      {/* <Filter /> */}
      {shops?.length === 0 && <PageLoader />}

      {filterShops?.length > 0
        ? filterShops?.map((shop, index) => <Shop {...shop} key={shop._id} />)
        : shops?.map((shop, index) => <Shop {...shop} key={shop._id} />)}
    </div>
  );
};

export default ShopContainer;
