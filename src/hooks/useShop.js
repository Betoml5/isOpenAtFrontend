import { useContext } from "react";
import Context from "../context/userContext";
import { getShop, getShops } from "../services/Shop";

export default useShop = () => {
  const { shops, setShops } = useContext(Context);

  const getAllShops = async () => {
    try {
      const response = await getShops();
      setShops(response);
    } catch (error) {
      console.log(error);
    }
  };
};
