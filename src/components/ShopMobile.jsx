import moneyIcon from "../static/dinero.svg";
import tarjetIcon from "../static/tarjeta.svg";
import addressIcon from "../static/address.svg";
import Swal from "sweetalert2";

export const ShopMobile = (props) => {
  const handleMoney = () => {
    Swal.fire(`Los metodos de pago son:
     Credito/Debito
     Efectivo`);
  };

  return (
    <div
      className=" 
        flex
        justify-between
        items-center
      bg-veryLightRed 
        py-6
        px-8 
        my-4
        rounded-full
        shopItem
        max-w-md
        md:justify-self-center
        md:w-3/5
        lg:col-span-2
        lg:w-full
        lg:h-80
        lg:rounded-2xl
        lg:flex-col"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl font-normal text-white lg:text-4xl">
          {props.name}
        </h3>
        <span className="hidden lg:block lg:text-white lg:text-2xl lg:uppercase">
          Abierto
          {/* Esto vendra de props */}
        </span>
      </div>

      <div className="hidden justify-evenly justify-self-center w-full border-2 border-white p-2 my-4 lg:flex lg:text-xl text-white">
        <span>Lun</span>
        <span>Mar</span>
        <span>Mie</span>
        <span>Jue</span>
        <span>Vie</span>
        <span>Sab</span>
        <span>Dom</span>
      </div>

      <div className="flex justify-between items-center  lg:w-full">
        <div className="flex items-center justify-between lg:w-full">
          <picture onClick={handleMoney}>
            <img src={moneyIcon} alt="" className="w-16 lg:w-14" />
          </picture>
          <picture className="mx-6">
            <img src={tarjetIcon} alt="" className="w-16 lg:w-14" />
          </picture>
          <picture>
            <img src={addressIcon} alt="" className="w-16 lg:w-14" />
          </picture>
        </div>
      </div>
    </div>
  );
};
