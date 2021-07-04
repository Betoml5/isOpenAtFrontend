import avocadoImage from "../static/avocado.png";
import breakFast from "../static/breakfast.jpg";
import hamburgerFood from "../static/ham.jpg";

export const HeroContainer = () => {
  return (
    <div>
      <div className="bg-highOrange relative ">
        <div className="p-4">
          <div>
            <h2 className="font-bold uppercase text-4xl">
              Ofertas de la semana
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <a className="bg-lightOrange px-4 py-2 rounded-full text-xs shadow-xl drop-shadow-xl">
              VER MÁS
            </a>
            <picture>
              <img src={avocadoImage} alt="" />
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
            fill-opacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,202.7C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="flex flex-wrap relative bg-lightPink pb-16 pt-16 gap-2 justify-center md:pt-40 lg:pt-56">
        <div className="relative w-2/3 max-w-xs md:w-1/3">
          <picture className="">
            <img src={hamburgerFood} alt="" className="w-full rounded-xl" />
            <div className="absolute bg-white w-40 rounded-full py-2 px-4 text-xs bottom-1 text-center centerBubble">
              Hamburguesa
            </div>
          </picture>
        </div>

        <div className="relative w-2/3 max-w-xs  md:w-1/3">
          <picture className="">
            <img src={hamburgerFood} alt="" className="w-full rounded-xl" />
            <div className="absolute bg-white w-40 rounded-full py-2 px-4 text-xs bottom-1 text-center centerBubble">
              Hamburguesa
            </div>
          </picture>
        </div>

        <div className="relative w-2/3 max-w-xs md:w-1/3">
          <picture className="">
            <img src={hamburgerFood} alt="" className="w-full rounded-xl" />
            <div className="absolute bg-white w-40 rounded-full py-2 px-4 text-xs bottom-1 text-center centerBubble">
              Hamburguesa
            </div>
          </picture>
        </div>
      </div>
    </div>
  );
};
