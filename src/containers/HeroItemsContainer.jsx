import  HeroItem  from "../components/HeroItem";

const HeroItemsContainer = () => {
  return (
    <div className="flex flex-wrap relative bg-lightPink pb-16 pt-12 gap-2 justify-center ">
      {[1, 2, 3].map((item) => (
        <HeroItem />
      ))}
    </div>
  );
};

export default HeroItemsContainer;
