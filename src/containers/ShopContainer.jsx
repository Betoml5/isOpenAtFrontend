import { HighLightShop } from "../components/HighLightShop";
import { ShopMobile } from "../components/ShopMobile";
import { SectionContainer } from "./SectionContainer";


export const ShopContainer = () => {
  return (
    <div className="grid gap-3 p-4 lg:grid-cols-4 xl:grid-cols-6 xl:gap-5">
      <HighLightShop />
      <SectionContainer />
      <ShopMobile name="Papa's Grill" />
      <ShopMobile name="Perolito" />
      <ShopMobile name="Mr.Boneless" />
      <ShopMobile name="La estaca" />
      <ShopMobile name="La estaca" />
      <ShopMobile name="La estaca" />
      <ShopMobile name="La estaca" />
      <ShopMobile name="La estaca" />
    </div>
  );
};
