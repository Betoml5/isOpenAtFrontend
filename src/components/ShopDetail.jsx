import { Menu } from "./Menu";
import { MenuDetail } from "./MenuDetail";
import { Shop } from "./Shop";

export const ShopDetail = () => {
  return (
    <div className="grid  self-center justify-self-center overflow-y-scroll scroll-snap-x overscroll-contain h-5/6">
      <Shop />
      <Menu />
      <MenuDetail />
    </div>
  );
};
