import { Section } from "../components/Section";
import foodIcon from "../static/fastFood.svg";
import shopIcon from "../static/shop.svg";

export const SectionContainer = () => {
  return (
    <div className="flex justify-self-center lg:col-span-4 xl:col-span-6 ">
      <Section icon={shopIcon} />
      <Section icon={foodIcon} />
    </div>
  );
};
