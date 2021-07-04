import { HeroSection } from "../components/HeroSection";
import avocadoImage from "../static/avocado.png";
import breakFast from "../static/breakfast.jpg";
import hamburgerFood from "../static/ham.jpg";
import { HeroItemsContainer } from "./HeroItemsContainer";

export const HeroContainer = () => {
  return (
    <div>
      <div className="bg-highOrange relative ">
        <div className="p-4">
          <div>
            <h2 className="font-bold uppercase text-4xl md:text-6xl">
              Ofertas de la semana
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <a className="bg-lightOrange px-8 py-4 rounded-full text-xs shadow-xl drop-shadow-xl md:text-xl">
              VER MÁS
            </a>
            <picture>
              <img src={avocadoImage} alt="" className="md:w-56" />
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
      
      <HeroItemsContainer />
    </div>
  );
};
