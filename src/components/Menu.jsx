import pizzaIcon from "../static/pizza-test.png";
import leftArrow from "../static/left-arrow.svg";
import rightArrow from "../static/right-arrow.svg";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center blur w-5/6 h-52 bg-white justify-self-center max-w-sm">
      <h3 className="text-center mt-4 uppercase text-xl font-monse">Menu</h3>

      <div className="flex items-center mt-4">
        <div>
          <picture>
            <img src={leftArrow} alt="" className="w-6 h-6" />
          </picture>
        </div>
        <div className="mx-4">
          <picture className="">
            <img src={pizzaIcon} alt="pizzaIcon" className="w-34" />
          </picture>
        </div>
        <div>
          <picture>
            <img src={rightArrow} alt="" className="w-6 h-6" />
          </picture>
        </div>
      </div>
    </div>
  );
};
