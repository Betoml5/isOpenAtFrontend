import restaurantCover from "../static/restaurantCover.jpg";
import verifyIcon from "../static/verify.svg";
import starIcon from "../static/star.svg";
import timeIcon from "../static/time.svg";
import dollarIcon from "../static/dollar.svg";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getShop } from "../services/Shop";
import useUser from "../hooks/useUser";
import { Helmet } from "react-helmet";
import Spinner from "./Spinner";

const ShopDetail = () => {
  const [enviosView, setEnviosView] = useState(true);
  const [resenasView, setResenasView] = useState(false);
  const [shop, setShop] = useState({});
  const { isLogged } = useUser();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response_shop = await getShop(id);
      setShop(response_shop);
    };
    fetchData();
  }, [id]);

  if (!shop) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col lg:w-full mx-auto  bg-white">
      <Helmet>
        <html lang="es" />
        <title>IsOpenAt - {`${shop?.name}`}</title>
        <meta name="description" content="Favorites" />
      </Helmet>
      <div>
        <picture>
          <img
            src={shop?.imageCover || restaurantCover}
            alt="shopCover"
            className="w-full object-cover lg:h-96"
          />
        </picture>
      </div>

      <div className="bg-white rounded-tr-3xl rounded-tl-3xl flex flex-col relative z-20 -mt-5 ">
        <div className="p-6">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <h4 className="mr-2">{shop?.name}</h4>
              <img src={verifyIcon} alt="verifyIcon" className="w-6" />
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
          <p className="">{shop?.address}</p>
        </div>
        <hr />
        <div className="flex items-center justify-around py-4">
          <div className="flex items-center bg-veryHighOrange w-max p-2 rounded-lg">
            <picture>
              <img src={starIcon} alt="starIcon" className="w-6 h-5" />
            </picture>
            <p className="text-white">
              {shop?.rating <= 0
                ? 0
                : (shop?.rating / shop?.reviews?.length).toFixed(2)}
            </p>
          </div>
          <div className="flex">
            <picture>
              <img src={timeIcon} alt="timeIcon" />
            </picture>
            <p>
              {" "}
              {shop?.avgTime <= 0
                ? 0
                : Math.floor(shop?.avgTime / shop?.reviews?.length)}{" "}
              Min
            </p>
          </div>
          <div className="flex">
            <picture>
              <img src={dollarIcon} alt="dollarIcon" />
            </picture>
            {shop?.freeShipping ? <p>Envio gratis</p> : <p>Envio con costo</p>}
          </div>
        </div>
        {/*TODO*/}
        <div className="flex text-center items-center self-center shadow-2xl my-6 p-6 rounded-lg">
          <p>
            Codigo "IsOpenAt" para un 5% off <br />
            <strong>Proximamente</strong>
          </p>
        </div>

        {isLogged ? (
          <div className=" bg-veryHighOrange p-4 self-center text-white rounded-lg">
            <Link to={`/shops/review/${id}`}>Hacer reseña</Link>
          </div>
        ) : (
          <div className="bg-veryHighOrange p-4 self-center text-white rounded-lg">
            <Link to="/sign-in">Quiero hacer una reseña</Link>
          </div>
        )}

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
              Productos
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
              Reseñas
            </p>
          </div>
        </div>

        <div
          className={`${
            resenasView ? "flex p-4 lg:justify-evenly foodSlider" : "hidden"
          }`}
        >
          {shop?.reviews?.map((review) => (
            <div
              className="bg-white rounded-lg shadow-2xl sliderReviewItem p-4 max-h-96 overflow-y-scroll"
              key={review}
            >
              <p>{review?.text}</p>
              <p className="my-2 italic font-bold">{review?.name}</p>
            </div>
          ))}
        </div>

        <div
          className={`${
            enviosView ? "flex p-4 foodSlider lg:justify-evenly" : "hidden"
          }`}
        >
          {shop?.imagesMenu?.map((image) => (
            <div className="sliderProductItem" key={image}>
              <img
                src={image}
                alt="imageMenu"
                className=" w-64 h-64  rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
