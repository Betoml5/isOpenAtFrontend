import { Shop } from "./Shop";
import pizzaIcon from "../static/pizza-test.png";

export const ShopDetail = () => {
  return (
    <div className="grid  self-center justify-self-center overflow-y-scroll scroll-snap-x overscroll-contain h-5/6">
      <Shop />
      <div className="flex flex-col items-center blur w-5/6 h-52 bg-white  justify-self-center">
        <h3 className="text-center mt-4 uppercase text-xl">Menu</h3>
        <picture className="mt-5">
          <img src={pizzaIcon} alt="pizzaIcon" className="w-34" />
        </picture>
      </div>
    </div>
  );
};
