import { useContext } from "react";
import Context from "../context/userContext";
import { getShop, getShops } from "../services/Shop";

export default useShop = () => {
  const { shops, setShops, favorites, setFavorites } = useContext(Context);
};

let favoritesArray = ["Mr.boneless", "Mr.taco"];

function addFavorite(payload) {
  favoritesArray = [...favoritesArray, payload];
}

addFavorite("Mr.Bone");

console.log(favoritesArray);
