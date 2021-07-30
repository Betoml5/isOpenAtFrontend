import HeroItem from "../components/HeroItem";
import breakfast from "../static/breakfast.jpg";
import hamburgerFood from "../static/ham.jpg";
import restaurant from "../static/res1.jpg";

const HeroItemsContainer = () => {
  const imagesArray = [
    {
      name: "Desayunos",
      image: breakfast,
    },
    {
      name: "Restaurantes",
      image: restaurant,
    },
    {
      name: "Hamburguesas",
      image: hamburgerFood,
    },
  ];

  return (
    <div className="flex flex-wrap relative bg-lightPink pb-16 pt-12 gap-2 justify-center ">
      {imagesArray.map((item) => (
        <HeroItem item={item} key={item.name} />
      ))}
    </div>
  );
};

export default HeroItemsContainer;
