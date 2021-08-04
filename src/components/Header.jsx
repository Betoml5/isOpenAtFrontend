import HomeIcon from "../static/home.svg";
import DadosIcon from "../static/dados.svg";
import LocationIcon from "../static/location.svg";
import UserIcon from "../static/user.svg";
import LoveIcon from "../static/love.svg";
import loginUser from "../static/loginuser.svg";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { getFavorites } from "../services/User";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
const itemStyles = "w-6 cursor-pointer";

const Header = (props) => {
  const { user, isLogged } = useUser();
  const userParsed = JSON.parse(user);
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = async (max) => {
    const fetchedFavorites = await getFavorites(userParsed?._id);
    if (fetchedFavorites?.length === 0) {
      Swal.fire({
        title: "No encontramos favoritos",
        text: "No tienes ningun comercio como favorito",
        confirmButtonText: "OK",
        icon: "error",
      });
    } else {
      const randomNumber =
        Math.floor(Math.random() * fetchedFavorites?.length) + 1;
      const randomShop = fetchedFavorites[randomNumber];
      return fetchedFavorites[randomShop];
    }
  };

  // useEffect(() => {
  //   const handleFavorites = async () => {
  //     const fetchedFavorites = await getFavorites(userParsed?._id);
  //     setFavorites(fetchedFavorites);
  //   };
  //   handleFavorites();
  // }, []);

  return (
    <div className="flex justify-around items-center bg-headerRed p-4 w-full z-50 sticky bottom-0 ">
      <Link to="/">
        <picture>
          <img src={HomeIcon} alt="home" className={itemStyles} />
        </picture>
      </Link>
      <Link to={`/user/favorites/${userParsed?._id}`}>
        <picture>
          <img src={LoveIcon} alt="LoveIcon" className={itemStyles} />
        </picture>
      </Link>
      <div
        className="bg-white p-2 rounded-full cursor-pointer"
        onClick={() => handleFavorite(10)}
      >
        <picture>
          <img src={DadosIcon} alt="randomPic" className="w-8" />
        </picture>
      </div>
      {isLogged ? (
        <Link to={`/user/${userParsed?._id}`}>
          <picture>
            <img src={UserIcon} alt="home" className={itemStyles} />
          </picture>
        </Link>
      ) : (
        <Link to={`/sign-in`}>
          <picture>
            <img src={loginUser} alt="addUserIcon" className={itemStyles} />
          </picture>
        </Link>
      )}
      <Link to="/shops/map">
        <picture>
          <img src={LocationIcon} alt="home" className={itemStyles} />
        </picture>
      </Link>
    </div>
  );
};

export default Header;
