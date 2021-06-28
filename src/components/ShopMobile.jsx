import moneyIcon from "../static/dinero.svg";
import tarjetIcon from "../static/tarjeta.svg";
import addressIcon from "../static/address.svg";

export const ShopMobile = (props) => {
  return (
    <div className="flex justify-between items-center bg-veryLightRed py-6 px-8 my-4 rounded-full shopItem ">
      <h3 className="text-xl font-normal text-white">{props.name}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <picture>
            <img src={moneyIcon} alt="" className="w-6" />
          </picture>
          <picture className="mx-6">
            <img src={tarjetIcon} alt="" className="w-6" />
          </picture>
          <picture>
            <img src={addressIcon} alt="" className="w-6" />
          </picture>
        </div>
      </div>
    </div>
  );
};
