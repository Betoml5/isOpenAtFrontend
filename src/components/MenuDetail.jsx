import { useHistory } from "react-router-dom";
import menuImage from "../static/restaurantMenu.jpg";

export const MenuDetail = (props) => {
  const history = useHistory();

  return (
    <div className="flex flex-col blur w-5/6 justify-self-center mt-4 p-8 max-w-sm relative mb-4">
      <picture className="flex flex-col ">
        <button
          onClick={() => history.push("/detail/menu")}
          className="absolute centerBtnMenu uppercase font-thin text-white bg-lightDark py-2  px-2 rounded-full bottom-4"
        >
          Ver menu
        </button>
        <img src={menuImage} alt="restaurantImage" className="w-full" />
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
