import moneyIcon from "../static/dinero.svg";
import tarjetIcon from "../static/tarjeta.svg";
import addressIcon from "../static/address.svg";

const iconWithHeigth = "w-6 h-6";

export const ShopDetail = () => {
  return (
    <div className="flex bg-restaurant bg-no-repeat  bg-cover relative max-w-sm rounded-2xl my-4 p-4 h-44 m-4">
      <div className="bg-greenDot w-3 h-3 rounded-full absolute right-4 top-4"></div>

      <div className="flex self-end items-center w-1/2">
        <picture>
          <img src={moneyIcon} alt="" className={iconWithHeigth} />
        </picture>
        <picture className="mx-8">
          <img src={tarjetIcon} alt="" className={iconWithHeigth} />
        </picture>
        <picture>
          <img src={addressIcon} alt="" className={iconWithHeigth} />
        </picture>
      </div>
      <h5 className="text-white w-1/2 self-end">PAPAS'S GRILL</h5>
    </div>
  );
};
