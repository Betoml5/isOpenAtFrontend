import { HighLightShop } from "../components/HighLightShop";
import { ShopMobile } from "../components/ShopMobile";
import { SectionContainer } from "./SectionContainer";
import shops from "../shops";
import { Hero } from "../components/Hero";

export const ShopContainer = () => {
  shops.map((item) => console.log(item));

  return (
    <div className="grid  gap-3 p-4 lg:grid-cols-4 xl:grid-cols-6 xl:gap-5 max-w-7xl mx-auto">
      <Hero />
      <HighLightShop />
      <SectionContainer />
      {shops.map((shop) => (
        <ShopMobile {...shop} key={shop.name} />
      ))}
    </div>
  );
};
