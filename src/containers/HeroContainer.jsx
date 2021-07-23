import avocadoImage from "../static/avocado.jpg";
import { Link } from "react-router-dom";
import HeroItemsContainer from "./HeroItemsContainer";
import HeroSectionContainer from "./HeroSectionContainer";

const HeroContainer = () => {
  return (
    <div>
      <div className="bg-highOrange relative">
        <div className="p-4 ">
          <div>
            <h2 className="font-bold uppercase text-4xl md:text-6xl lg:text-8xl xl:w-3/4 2xl:w-2/4 ">
              Ofertas de la semana
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/shops"
              className="bg-lightOrange px-8 py-4 rounded-full text-xs shadow-xl drop-shadow-xl md:text-xl lg:text-3xl lg:px-24 lg:py-6"
            >
              VER MÁS
            </Link>
            <picture>
              <img
                src={avocadoImage}
                alt=""
                className=" w-36 md:w-52 lg:w-72 xl:w-96 rounded-full"
              />
            </picture>
          </div>
        </div>
        <svg
          className="absolute z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F5AB0C"
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,202.7C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <HeroSectionContainer />
      <HeroItemsContainer />
    </div>
  );
};

export default HeroContainer;
