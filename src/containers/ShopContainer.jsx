import { HighLightShop } from "../components/HighLightShop";
import { ShopMobile } from "../components/ShopMobile";
import { SectionContainer } from "./SectionContainer";


export const ShopContainer = () => {
  return (
    <div className="grid p-4 h-5/6 relative shopContainer sm:grid-cols-3 sm:gap-5">
      <HighLightShop />
      <SectionContainer />
      <ShopMobile name="Papa's Grill" />
      <ShopMobile name="Perolito" />
      <ShopMobile name="Mr.Boneless" />
      <ShopMobile name="La estaca" />
    </div>
  );
};
