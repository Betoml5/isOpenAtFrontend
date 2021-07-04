import { HeroSection } from "../components/HeroSection";
import eggPicture from "../static/egg.png";
import foodPicture from "../static/food1.png";
import food2Picture from "../static/food2.png";
import food3Picture from "../static/food3.png";

export const HeroSectionContainer = () => {
  const items = [
    {
      picture: eggPicture,
    },
    {
      picture: foodPicture,
    },
    {
      picture: food2Picture,
    },
    {
      picture: food3Picture,
    },
  ];
  return (
    <div className="flex justify-around w-full gap-1">
      {items.map((item) => (
        <HeroSection pic={item.picture} />
      ))}
    </div>
  );
};
