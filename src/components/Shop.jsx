import { useHistory } from "react-router-dom";
import restaurantCover from "../static/restaurantCover.jpg";
import verifyIcon from "../static/verify.svg";
import favoriteIcon from "../static/favorite.svg";
import percentIcon from "../static/percent.svg";
import starIcon from "../static/star.svg";
import timeIcon from "../static/time.svg";
import dollarIcon from "../static/dollar.svg";

export const Shop = ({
  name,
  highLight,
  avgTime,
  freeShipping,
  rating,
  address,
}) => {
  const history = useHistory();

  return (
    <div
      className={`flex flex-col max-w-md justify-self-center my-4 cursor-pointer  ${
        highLight && ``
      }`}
      onClick={() => {
        history.push("/detail");
      }}
    >
      <div className="w-full">
        <picture>
          <img
            src={restaurantCover}
            alt="restaurantCover"
            className="w-full rounded-tr-2xl rounded-tl-2xl"
          />
        </picture>
      </div>

      <div className="bg-white p-4 rounded-2xl">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="mr-2">{name}</h4>
            <img src={verifyIcon} alt="verifyIcon" className="w-6" />
          </div>
          <div className="cursor-pointer">
            <img src={favoriteIcon} alt="favoriteIcon" />
          </div>
        </div>

        <div className="flex my-2">
          <p className="text-highGreen font-semibold uppercase mr-2">Abierto</p>
          <p>{address}</p>
        </div>
        <hr className="my-2" />

        <div className="flex justify-center  items-center self-center shadow-2xl my-6 p-4 rounded-lg lg:justify-center">
          <picture>
            <img src={percentIcon} alt="percentIcon" />
          </picture>
          <p className="text-sm text-center lg:text-xs">
            Codigo "IsOpenAt" para un 5% off
          </p>
        </div>

        <div className="flex items-center justify-around py-4">
          <div className="flex items-center bg-veryHighOrange w-max p-2 rounded-lg">
            <picture>
              <img src={starIcon} alt="starIcon" className="w-6 h-5" />
            </picture>
            <p className="text-white">{rating}</p>
          </div>
          <div className="flex items-center">
            <picture>
              <img src={timeIcon} alt="timeIcon" />
            </picture>
            <p className="lg:text-sm">{avgTime} minutos</p>
          </div>
          <div className="flex items-center">
            <picture>
              <img src={dollarIcon} alt="dollarIcon" />
            </picture>
            <p className="lg:text-sm">
              {freeShipping ? "Envio gratis" : "Costo de envio"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
