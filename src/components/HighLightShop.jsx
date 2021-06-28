import moneyIcon from "../static/dinero.svg";
import tarjetIcon from "../static/tarjeta.svg";
import addressIcon from "../static/address.svg";
import peopleIcon from "../static/people.svg";

export const HighLightShop = (props) => {
  return (
    <div className="grid bg-highLight py-8 px-8 rounded highLight max-w-md md:w-3/5  md:justify-self-center lg:col-span-4 xl:col-span-6">
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

      <div className="flex justify-evenly justify-self-center w-full border-2 border-black p-2 my-4 ">
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
