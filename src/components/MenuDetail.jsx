import menuImage from "../static/menu-test.png";

export const MenuDetail = ({}) => {
  return (
    <div className="flex flex-col blur w-5/6 justify-self-center mt-4 p-8 max-w-sm relative">
      <picture className="flex flex-col ">
        <img src={menuImage} alt="" />
        <button className="absolute centerBtnMenu uppercase font-thin text-white bg-lightDark py-2  px-2 rounded-full bottom-4">
          Ver menu
        </button>
      </picture>

      <button className="bg-lightGreen px-2 py-2 rounded-full mt-6 font-monse text-sm">
        Agregar a favoritos
      </button>
      <button className="bg-lightRed px-2 py-2 rounded-full mt-2 font-monse text-sm">
        Borrar de favoritos
      </button>
    </div>
  );
};
