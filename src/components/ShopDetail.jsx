import restaurantCover from "../static/restaurantCover.jpg";
import verifyIcon from "../static/verify.svg";
import favoriteIcon from "../static/favorite.svg";
import starIcon from "../static/star.svg";
import timeIcon from "../static/time.svg";
import dollarIcon from "../static/dollar.svg";
import percentIcon from "../static/percent.svg";
import hamburgerPic from "../static/ham.jpg";
import notFavorite from "../static/carbon_favorite.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShop } from "../services/Shop";

export const ShopDetail = () => {
  const [enviosView, setEnviosView] = useState(true);
  const [resenasView, setResenasView] = useState(false);

  const [shop, setShop] = useState({});
  const [like, setLike] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getShop(id).then((res) => {
      console.log(res);
      setShop(res);
    });

    console.log(`shop ${shop}`);
  }, []);

  return (
    <div className="flex flex-col lg:w-full mx-auto">
      <div className="">
        <picture>
          <img
            src={restaurantCover}
            alt="shopCover"
            className="w-full object-cover lg:h-96"
          />
        </picture>
      </div>

      <div className="bg-white rounded-tr-3xl rounded-tl-3xl flex flex-col relative z-20 -mt-5 ">
        <div className="p-6">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <h4 className="mr-2">{shop.name}</h4>
              <img src={verifyIcon} alt="verifyIcon" className="w-6" />
            </div>
            <div onClick={() => setLike(!like)} className="cursor-pointer">
              {like ? (
                <div className="cursor-pointer">
                  <img src={favoriteIcon} alt="favoriteIcon" />
                </div>
              ) : (
                <div className="cursor-pointer ">
                  <img src={notFavorite} alt="favoriteIcon" />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center my-2 ">
            {shop.openNow?.openNow ? (
              <p className="text-highGreen font-semibold uppercase mr-2">
                Abierto
              </p>
            ) : (
              <p className="font-semibold uppercase mr-2 text-veryHighOrange">
                Cerrado
              </p>
            )}
          </div>
          <p className="">{shop.address}</p>
        </div>
        <hr />
        <div className="flex items-center justify-around py-4">
          <div className="flex items-center bg-veryHighOrange w-max p-2 rounded-lg">
            <picture>
              <img src={starIcon} alt="" className="w-6 h-5" />
            </picture>
            <p className="text-white">{shop.rating}</p>
          </div>
          <div className="flex">
            <picture>
              <img src={timeIcon} alt="" />
            </picture>
            <p>{shop.avgTime}</p>
          </div>
          <div className="flex">
            <picture>
              <img src={dollarIcon} alt="" />
            </picture>
            {shop?.freeShipping ? <p>Envio gratis</p> : <p>Envio con costo</p>}
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
            className="w-1/2 mr-2 cursor-pointer"
            onClick={() => {
              if (resenasView) {
                setResenasView(!resenasView);
                setEnviosView(!enviosView);
              }
            }}
          >
            <p className="text-center border-b-2 border-veryHighOrange">
              Envios
            </p>
          </div>
          <div
            className="w-1/2 cursor-pointer"
            onClick={() => {
              if (enviosView) {
                setResenasView(!resenasView);
                setEnviosView(!enviosView);
              }
            }}
          >
            <p className="text-center border-b-2 border-veryHighOrange">
              Resenas
            </p>
          </div>
        </div>

        <div
          className={`${
            resenasView ? `flex p-4 lg:justify-evenly slider` : `hidden`
          }`}
        >
          <div className="bg-white rounded-lg shadow-2xl sliderReviewItem p-4 max-h-96 overflow-y-scroll">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              expedita perferendis voluptatum, optio iure delectus eos! Esse
              excepturi, aliquam illo doloremque temporibus autem ipsam. Ipsam
              eius natus unde beatae nulla! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae expedita perferendis
              voluptatum, optio iure delectus eos! Esse excepturi, aliquam illo
              doloremque temporibus autem ipsam. Ipsam eius natus unde beatae
              nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae expedita perferendis voluptatum, optio iure delectus eos!
              Esse excepturi, aliquam illo doloremque temporibus autem ipsam.
              Ipsam eius natus unde beatae nulla! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae expedita perferendis
              voluptatum, optio iure delectus eos! Esse excepturi, aliquam illo
              doloremque temporibus autem ipsam. Ipsam eius natus unde beatae
              nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae expedita perferendis voluptatum, optio iure delectus eos!
              Esse excepturi, aliquam illo doloremque temporibus autem ipsam.
              Ipsam eius natus unde beatae nulla!
            </p>
            <p className="my-2">De: Alberto Martinez</p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl sliderReviewItem p-4 max-h-96 overflow-y-scroll">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              expedita perferendis voluptatum, optio iure delectus eos! Esse
              excepturi, aliquam illo doloremque temporibus autem ipsam. Ipsam
              eius natus unde beatae nulla! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae expedita perferendis
              voluptatum, optio iure delectus eos! Esse excepturi, aliquam illo
              doloremque temporibus autem ipsam. Ipsam eius natus unde beatae
              nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae expedita perferendis voluptatum, optio iure delectus eos!
              Esse excepturi, aliquam illo doloremque temporibus autem ipsam.
              Ipsam eius natus unde beatae nulla! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae expedita perferendis
              voluptatum, optio iure delectus eos! Esse excepturi, aliquam illo
              doloremque temporibus autem ipsam. Ipsam eius natus unde beatae
              nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae expedita perferendis voluptatum, optio iure delectus eos!
              Esse excepturi, aliquam illo doloremque temporibus autem ipsam.
              Ipsam eius natus unde beatae nulla!
            </p>
            <p className="my-2">De: Alberto Martinez</p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl sliderReviewItem p-4 max-h-96 overflow-y-scroll">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              expedita perferendis voluptatum, optio iure delectus eos! Esse
              excepturi, aliquam illo doloremque temporibus autem ipsam. Ipsam
              eius natus unde beatae nulla! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae expedita perferendis
              voluptatum, optio iure delectus eos! Esse excepturi, aliquam illo
              doloremque temporibus autem ipsam. Ipsam eius natus unde beatae
              nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae expedita perferendis voluptatum, optio iure delectus eos!
              Esse excepturi, aliquam illo doloremque temporibus autem ipsam.
              Ipsam eius natus unde beatae nulla! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae expedita perferendis
              voluptatum, optio iure delectus eos! Esse excepturi, aliquam illo
              doloremque temporibus autem ipsam. Ipsam eius natus unde beatae
              nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae expedita perferendis voluptatum, optio iure delectus eos!
              Esse excepturi, aliquam illo doloremque temporibus autem ipsam.
              Ipsam eius natus unde beatae nulla!
            </p>
            <p className="my-2">De: Alberto Martinez</p>
          </div>
        </div>

        <div
          className={`${
            enviosView ? `flex p-4 slider lg:justify-evenly` : `hidden`
          }`}
        >
          <div className=" sliderProductItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
          <div className=" sliderProductItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
          <div className=" sliderProductItem">
            <img src={hamburgerPic} alt="" className=" rounded-2xl" />
          </div>
          <div className=" sliderProductItem">
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
