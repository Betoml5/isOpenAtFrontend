import restaurantCover from "../static/restaurantCover.jpg";
import verify from "../static/verify.svg";
import favoriteIcon from "../static/favorite.svg";
import starIcon from "../static/star.svg";
import timeIcon from "../static/time.svg";
import dollarIcon from "../static/dollar.svg";
import percentIcon from "../static/percent.svg";
import hamburgerPic from "../static/ham.jpg";
import { useState } from "react";

export const ShopDetail = () => {
  const [enviosView, setEnviosView] = useState(true);
  const [resenasView, setResenasView] = useState(false);
  // const [state, setstate] = useState(initialState);

  const handleView = () => {};

  return (
    <div>
      <div>
        <picture>
          <img src={restaurantCover} alt="" className="w-full" />
        </picture>
      </div>

      <div className="bg-white rounded-tr-3xl rounded-tl-3xl flex flex-col relative z-20 -mt-5">
        <div className="flex items-center justify-between p-6">
          <div>
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

        <div className="flex self-center justify-between my-4 w-3/4">
          <div
            className="w-1/2 mr-2"
            onClick={() => setEnviosView(!enviosView)}
          >
            <p className="text-center border-b-2 border-veryHighOrange">
              Envios
            </p>
          </div>
          <div className="w-1/2">
            <p className="text-center border-b-2 border-veryHighOrange">
              Resenas
            </p>
          </div>
        </div>

        <div
          className={`${
            enviosView ? `flex p-4 overflow-x-scroll slider` : `hidden`
          }`}
        >
          <div className=" sliderItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
          <div className=" sliderItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
          <div className=" sliderItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
          <div className=" sliderItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
        </div>

        {/* <div className="flex  self-center w-6/7 my-2 mx-2">
          <div className="mr-2 w-1/2">
            <div>
              <p className="text-center border-b-2 border-veryHighOrange mb-2">
                Envios
              </p>
            </div>
            <div className={`flex overflow-x-scroll gap-2 `}>
              <div className="">
                <picture>
                  <img src={hamburgerPic} alt="" className="my-2 rounded-2xl" />
                </picture>
              </div>
              <div className="">
                <picture>
                  <img src={hamburgerPic} alt="" className="my-2 rounded-2xl" />
                </picture>
              </div>
              <div className="">
                <picture>
                  <img src={hamburgerPic} alt="" className="my-2 rounded-2xl" />
                </picture>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <p className="text-center border-b-2 border-veryHighOrange mb-2">
                Resenas
              </p>
            </div>
            <div className={`hidden`}>
              <div className="">
                <picture>
                  <img
                    src={hamburgerPic}
                    alt=""
                    className="w-92 my-2 rounded-2xl"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src={hamburgerPic}
                    alt=""
                    className="w-92 my-2 rounded-2xl"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src={hamburgerPic}
                    alt=""
                    className="w-92 my-2 rounded-2xl"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
