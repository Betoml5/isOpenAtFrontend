import restaurantCover from "../static/restaurantCover.jpg";
import verify from "../static/verify.svg";
import favoriteIcon from "../static/favorite.svg";
import starIcon from "../static/star.svg";
import timeIcon from "../static/time.svg";
import dollarIcon from "../static/dollar.svg";
import percentIcon from "../static/percent.svg";

export const ShopDetail = () => {
  return (
    <div>
      <div>
        <picture>
          <img src={restaurantCover} alt="" />
        </picture>
      </div>
      <div className="bg-white rounded-tr-3xl rounded-tl-3xl flex flex-col">
        <div className="flex items-center justify-between p-6">
          <div className="">
            <div className="flex items-center">
              <h3 className="font-medium mr-4">La estaca</h3>
              <img src={verify} alt="" className="" />
            </div>
            <div className="flex items-center">
              <p className="text-highGreen font-semibold uppercase mr-2">
                Abierto
              </p>
              <p className="">Sabinas, Coahuila</p>
            </div>
          </div>
          <div>
            <picture>
              <img src={favoriteIcon} alt="" />
            </picture>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-around py-4">
          <div className="flex items-center bg-veryHighOrange w-max p-2 rounded-lg">
            <picture>
              <img src={starIcon} alt="" className="w-6 h-5" />
            </picture>
            <p className="text-white">4.5</p>
          </div>
          <div className="flex">
            <picture>
              <img src={timeIcon} alt="" />
            </picture>
            <p>15 min</p>
          </div>
          <div className="flex">
            <picture>
              <img src={dollarIcon} alt="" />
            </picture>
            <p>Envio gratis</p>
          </div>
        </div>

        <div className="flex items-center self-center shadow-2xl my-6 p-4 rounded-lg">
          <picture>
            <img src={percentIcon} alt="" />
          </picture>
          <p>Codigo "IsOpenAt" para un 5% off</p>
        </div>

        <div className="flex justify-between self-center w-3/4 my-2">
            
        </div>
      </div>
    </div>
  );
};
