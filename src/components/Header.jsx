import HomeIcon from "../static/home.svg";
import DadosIcon from "../static/dados.svg";
import LocationIcon from "../static/location.svg";
import UserIcon from "../static/user.svg";
import LoveIcon from "../static/love.svg";
import loginUser from "../static/loginuser.svg";
import useUser from "../hooks/useUser";
import { Link, useHistory } from "react-router-dom";
import { getRandomFavorite } from "../services/User";
import { useState } from "react";
import dicesAnimation from "../static/dicesAnimation.svg";

import Swal from "sweetalert2";
import DicesAnimation from "./DicesAnimation";
const itemStyles = "w-6 cursor-pointer";

const Header = (props) => {
  const [animation, setAnimation] = useState(false);
  const { user, isLogged } = useUser();
  const userParsed = JSON.parse(user);
  const history = useHistory();
  const randomFavorite = async () => {
    if (!isLogged) {
      Swal.fire({
        titleText: "Inicia Sesion",
        text: "Inicia sesion primero",
        confirmButtonText: "Siuuuu!",
      }).then(() => {
        history.push(`/sign-in`);
      });
    } else {
      setAnimation(true);

      setTimeout(async () => {
        setAnimation(false);
        const shop = await getRandomFavorite(userParsed?._id);
        const recomendShop = shop.name;
        if (shop.length !== 0) {
          Swal.fire({
            titleText: "Recomendacion",
            text: `Te recomendamos ir a ${recomendShop}`,
            confirmButtonText: "Gracias!",
          }).then(() => {
            history.push(`/shops/detail/${shop?._id}`);
          });
        } else {
          Swal.fire({
            titleText: "No tienes favoritos",
            text: `Aun no tienes favoritos :(`,
          });
        }
      }, 3000);
    }

    //  else {
    //   Swal.fire({
    //     titleText: "No tienes favoritos",
    //     text: "Aún no tienes favoritos :(",
    //   }).then(() => history.push("/shops"));
    // }
  };

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
        onClick={randomFavorite}
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

      <div className={`${animation ? `dicesAnimation` : `hidden`}`}>
        <object type="image/svg+xml" data={dicesAnimation} className="w-full">
          svg-animation
        </object>
      </div>
    </div>
  );
};

export default Header;
