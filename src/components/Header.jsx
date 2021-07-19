import HomeIcon from "../static/home.svg";
import DadosIcon from "../static/dados.svg";
import LocationIcon from "../static/location.svg";
import UserIcon from "../static/user.svg";
import LoveIcon from "../static/love.svg";
import loginUser from "../static/loginuser.svg";
import Swal from "sweetalert2";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../services/User";
import { getShop } from "../services/Shop";
const itemStyles = "w-6 cursor-pointer";

const Header = (props) => {
  const { user, isLogged, userFetched } = useUser();
  const userParsed = JSON.parse(user);
  console.log("user fetched", userFetched?.favorites);

  const handleRandom = async () => {
    if (!user) {
      Swal.fire({
        title: "No hay usuario!",
        text: `Inicia Sesion primero :)`,
        confirmButtonText: "OK",
        icon: "info",
      });
    } else {
      const randomPlace =
        userFetched?.favorites[
          Math.floor(Math.random() * userFetched?.favorites?.length)
        ];
      const shop = await getShop(randomPlace);
      Swal.fire({
        title: "Hey!",
        text: `Te recomendamos ir a ${shop.name}`,
        confirmButtonText: "Ya quedo!",
      });
    }
  };

  return (
    <div className="flex justify-around items-center bg-headerRed p-4 w-full z-50 sticky bottom-0">
      <Link to="/">
        <picture>
          <img src={HomeIcon} alt="home" className={itemStyles} />
        </picture>
      </Link>
      <Link to="/favorites">
        <picture>
          <img src={LoveIcon} alt="LoveIcon" className={itemStyles} />
        </picture>
      </Link>
      <div
        className="bg-white p-2 rounded-full cursor-pointer"
        onClick={handleRandom}
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
      <Link to="/">
        <picture>
          <img src={LocationIcon} alt="home" className={itemStyles} />
        </picture>
      </Link>
    </div>
  );
};

export default Header;
