import imageMenu from "../static/restaurantMenu.jpg";
import closeIcon from "../static/close.svg";
import { useHistory } from "react-router-dom";

export const MenuImage = () => {
  const history = useHistory();

  return (
    <div className="relative">
      <div
        className="absolute bg-white p-2 rounded-full right-1 top-1 cursor-pointer"
        onClick={() => history.goBack()}
      >
        <picture className="bg-white">
          <img src={closeIcon} alt="closeIcon" className=" w-4" />
        </picture>
      </div>
      <picture>
        <img src={imageMenu} alt="imageMenu" />
      </picture>
    </div>
  );
};
