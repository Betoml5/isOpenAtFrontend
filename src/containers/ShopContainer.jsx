import { ShopDetail } from "../components/ShopDetail";
import arrowDownIcon from "../static/arrowDown.svg";
export const ShopContainer = () => {
  return (
    <div className=" h-full overflow-y-scroll scroll-snap-x overscroll-contain	 relative shopContainer">
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
      <ShopDetail />
    </div>
  );
};
