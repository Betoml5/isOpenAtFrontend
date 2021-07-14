import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getShop } from "../services/Shop";

export const ShopReview = () => {
  const [shop, setShop] = useState();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getShop(id).then((res) => setShop(res));
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-11/12 mx-auto my-4 ">
        <form className="flex flex-col bg-veryLightRed p-6 rounded-lg">
          <h3 className="text-3xl self-center mb-6 font-bold">{shop?.name}</h3>
          <label htmlFor="shopName" className="text-white">
            Rating
          </label>
          <input
            type="number"
            className="form-field"
            max="5"
            placeholder="Ingresa el rating"
          />
        </form>
      </div>
    </div>
  );
};
