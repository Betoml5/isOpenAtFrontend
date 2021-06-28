
import { Menu } from "./Menu";
import { MenuDetail } from "./MenuDetail";
import { Shop } from "./Shop";

export const ShopDetail = () => {
  return (
    <div className="grid  self-center justify-self-center  overscroll-contain ">
      <Shop />
      <Menu />
      <MenuDetail />
    </div>
  );
};
