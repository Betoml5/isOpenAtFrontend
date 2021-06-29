import moneyIcon from "../static/dinero.svg";
import tarjetIcon from "../static/tarjeta.svg";
import addressIcon from "../static/address.svg";
import peopleIcon from "../static/people.svg";

import res1 from "../static/res1.jpg";
import res2 from "../static/res2.jpg";
import res3 from "../static/res3.jpg";

export const HighLightShop = (props) => {
  return (
    <div className="grid relative bg-highLight py-8 px-8 rounded highLight max-w-xl md:w-3/5  md:justify-self-center lg:col-span-full lg:max-w-xl  lg:h-96">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl">Papa's Grill</h3>
        <p>Abierto</p>
      </div>

      <div className="flex items-center">
        <picture>
          <img src={peopleIcon} alt="" className="w-12 mr-4" />
        </picture>
        <span className="text-2xl">14</span>
      </div>

      <div className="hidden absolute top-24 right-1 lg:flex">
        <div className=" bg-white w-max p-1 rounded-full">
          <picture>
            <img src={res1} alt="" className="rounded-full w-16 h-16 " />
          </picture>
        </div>
        <div className=" bg-white w-max p-1 rounded-full mx-2">
          <picture>
            <img src={res2} alt="" className="rounded-full w-16 h-16 " />
          </picture>
        </div>
        <div className=" bg-white w-max p-1 rounded-full">
          <picture>
            <img src={res3} alt="" className="rounded-full w-16 h-16 " />
          </picture>
        </div>
      </div>

      <div className="flex justify-evenly justify-self-center items-center w-full border-2 border-black p-2 my-4 ">
        <span>Lun</span>
        <span>Mar</span>
        <span>Mie</span>
        <span>Jue</span>
        <span>Vie</span>
        <span>Sab</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <picture>
            <img src={moneyIcon} alt="" className="w-8" />
          </picture>
          <picture className="mx-6">
            <img src={tarjetIcon} alt="" className="w-8" />
          </picture>
          <picture>
            <img src={addressIcon} alt="" className="w-8" />
          </picture>
        </div>

        <span>AVG: $95</span>
      </div>
    </div>
  );
};
