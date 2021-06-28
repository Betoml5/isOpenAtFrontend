import { Section } from "../components/Section";
import foodIcon from "../static/fastFood.svg";
import shopIcon from "../static/shop.svg";

export const SectionContainer = () => {
  return (
    <div className="flex justify-self-center">
      <Section icon={shopIcon} />
      <Section icon={foodIcon} />
    </div>
  );
};
