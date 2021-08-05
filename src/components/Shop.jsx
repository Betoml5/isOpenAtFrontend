import { Link } from "react-router-dom";
import restaurantCover from "../static/restaurantCover.jpg";
import verifyIcon from "../static/verify.svg";
import favoriteIcon from "../static/favorite.svg";
import percentIcon from "../static/percent.svg";
import starIcon from "../static/star.svg";
import timeIcon from "../static/time.svg";
import dollarIcon from "../static/dollar.svg";
import notFavorite from "../static/carbon_favorite.svg";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import Swal from "sweetalert2";
import { addFavorite, getUser, removeFavorite } from "../services/User";

const Shop = ({
  _id,
  name,
  imageCover,
  avgTime,
  freeShipping,
  rating,
  address,
  openNow,
  reviews,
}) => {
  const { isLogged, user } = useUser();
  const [userFetched, setUserFetched] = useState(null);
  const userParsed = JSON.parse(user);

  const handleFavorite = async () => {
    if (isLogged) {
      try {
        const res = await addFavorite(userParsed._id, _id);
        setUserFetched(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "Inicia sesion",
        text: "Hey! Inicia sesion primero",
        confirmButtonText: "Yasta",
      });
    }
  };

  const deleteFavorite = async () => {
    if (isLogged) {
      try {
        const res = await removeFavorite(userParsed?._id, _id);
        setUserFetched(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "Inicia sesion",
        text: "Hey! Inicia sesion primero",
        confirmButtonText: "Yasta",
      });
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(userParsed?._id);
      setUserFetched(res);
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col max-w-md justify-self-center cursor-pointer ">
      <Link to={`/shops/detail/${_id}`} className="h-1/2">
        <div className="w-full h-full">
          <picture className="w-full h-full">
            <img
              src={imageCover || restaurantCover}
              alt="restaurantCover"
              className="w-full h-full rounded-tr-2xl rounded-tl-2xl"
              loading="lazy"
            />
          </picture>
        </div>
      </Link>

      <div className="bg-white p-4 rounded-2xl">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="mr-2">{name}</h4>
            <img src={verifyIcon} alt="verifyIcon" className="w-6" />
          </div>

          <div className="cursor-pointer">
            {userFetched?.favorites?.includes(_id) ? (
              <div className="cursor-pointer" onClick={deleteFavorite}>
                <img src={favoriteIcon} alt="favoriteIcon" />
              </div>
            ) : (
              <div className="cursor-pointer " onClick={handleFavorite}>
                <img src={notFavorite} alt="favoriteIcon" />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center my-2">
          {openNow?.openNow ? (
            <p className="text-highGreen font-semibold uppercase mr-2">
              Abierto
            </p>
          ) : (
            <p className="font-semibold uppercase mr-2 text-veryHighOrange">
              Cerrado
            </p>
          )}
        </div>
        <p>{address}</p>
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
            <p className="text-white">
              {rating <= 0 ? 0 : (rating / reviews?.length).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center">
            <picture>
              <img src={timeIcon} alt="timeIcon" />
            </picture>
            <p className="lg:text-sm">
              {avgTime <= 0 ? 0 : Math.floor(avgTime / reviews?.length)} Min
            </p>
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

export default Shop;
