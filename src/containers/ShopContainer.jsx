import { HighLightShop } from "../components/HighLightShop";
import { Shop } from "../components/Shop";
export const ShopContainer = () => {
  return (
    <div className="grid p-4 h-5/6 relative shopContainer sm:grid-cols-3 sm:gap-5">
      <HighLightShop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
    </div>
  );
};
