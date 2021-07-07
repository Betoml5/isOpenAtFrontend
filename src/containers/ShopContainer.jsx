import { Shop } from "../components/Shop";

export const ShopContainer = () => {
  return (
    <div className="grid gap-2 justify-center md:grid-cols-2 lg:gap-8 lg:grid-cols-2 lg:w-11/12 lg:mx-auto xl:grid-cols-4">
      <Shop highLight={true} />
      <Shop highLight={true} />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
    </div>
  );
};
