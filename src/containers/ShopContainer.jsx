import { ShopMobile } from "../components/ShopMobile";
import { SectionContainer } from "./SectionContainer";
import shops from "../shops";

export const ShopContainer = () => {
  shops.map((item) => console.log(item));

  return (
    <div className="grid  gap-3  lg:grid-cols-4 xl:grid-cols-6 xl:gap-5 max-w-7xl mx-auto">
      <SectionContainer />
      {shops.map((shop) => (
        <ShopMobile {...shop} key={shop.name} />
      ))}
    </div>
  );
};
