import HomeIcon from "../static/home.svg";
import DadosIcon from "../static/dados.svg";
import LocationIcon from "../static/location.svg";
import UserIcon from "../static/user.svg";
import LoveIcon from "../static/love.svg";
import { useHistory } from "react-router-dom";

const itemStyles = "w-6 cursor-pointer";

export const Header = (props) => {
  const history = useHistory();

  return (
    <div className="flex justify-around items-center bg-headerRed p-4 w-full z-50 sticky bottom-0">
      <div onClick={() => history.push("/")}>
        <picture>
          <img src={HomeIcon} alt="home" className={itemStyles} />
        </picture>
      </div>
      <div>
        <picture>
          <img src={LoveIcon} alt="home" className={itemStyles} />
        </picture>
      </div>
      <div className="bg-white p-2 rounded-full">
        <picture>
          <img src={DadosIcon} alt="home" className="w-8" />
        </picture>
      </div>
      <div>
        <picture>
          <img src={UserIcon} alt="home" className={itemStyles} />
        </picture>
      </div>
      <div>
        <picture>
          <img src={LocationIcon} alt="home" className={itemStyles} />
        </picture>
      </div>
    </div>
  );
};
