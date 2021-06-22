import { Shop } from "../components/Shop";
import arrowDownIcon from "../static/arrowDown.svg";
export const ShopContainer = () => {
  return (
    <div className="grid sm:grid-cols-3 h-5/6 overflow-y-scroll scroll-snap-x overscroll-contain	 relative shopContainer">
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
    </div>
  );
};
