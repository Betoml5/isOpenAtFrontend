const HeroItem = ({ item }) => {
  return (
    <div className="relative w-2/3 md:w-1/3 max-w-xs">
      <picture className="">
        <img
          src={item.image}
          alt=""
          className="w-full h-56 object-cover rounded-xl"
        />
        <div className="absolute bg-white w-40 rounded-full py-2 px-4 text-xs bottom-1 text-center centerBubble md:text-sm">
          {item.name}
        </div>
      </picture>
    </div>
  );
};

export default HeroItem;
