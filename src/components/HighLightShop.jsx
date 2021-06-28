import moneyIcon from "../static/dinero.svg";
import tarjetIcon from "../static/tarjeta.svg";
import addressIcon from "../static/address.svg";

export const HighLightShop = (props) => {
  return (
    <div className="grid bg-highLight py-8 px-8 rounded highLight">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">Papa's Grill</h3>
        <p>Abierto</p>
      </div>

      <div className="flex justify-evenly justify-self-center w-full border-2 border-black p-2 my-6 ">
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
