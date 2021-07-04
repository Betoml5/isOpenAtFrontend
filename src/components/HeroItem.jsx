import hamburgerFood from "../static/ham.jpg";
export const HeroItem = () => {
  return (
    <div className="relative w-2/3 max-w-xs md:w-1/3">
      <picture className="">
        <img src={hamburgerFood} alt="" className="w-full rounded-xl" />
        <div className="absolute bg-white w-40 rounded-full py-2 px-4 text-xs bottom-1 text-center centerBubble md:text-sm">
          Hamburguesa
        </div>
      </picture>
    </div>
  );
};
