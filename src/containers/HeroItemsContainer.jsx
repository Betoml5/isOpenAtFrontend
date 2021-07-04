import { HeroItem } from "../components/HeroItem";
import { HeroSection } from "../components/HeroSection";
import { HeroSectionContainer } from "./HeroSectionContainer";

export const HeroItemsContainer = () => {
  return (
    <div className="flex flex-wrap relative bg-lightPink pb-16 pt-16 gap-2 justify-center md:pt-40 lg:pt-56 xl:pt-72">
      <HeroSectionContainer />
      {[1, 2, 3].map((item) => (
        <HeroItem />
      ))}
    </div>
  );
};
