import axios from "axios";
import { useForm } from "react-hook-form";

export const ShopForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("shopName"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center bg-white p-4"
    >
      <h3 className="text-xl uppercase text-center my-4 bg-veryHighOrange p-4 text-white rounded-md">
        Afiliar nuevo comercio
      </h3>
      <label htmlFor="shopName">Nombre del comercio</label>
      <input
        placeholder="Nombre del comercio"
        name="shopName"
        className="form-field"
        {...register("shopName", { required: true })}
      />
      <label htmlFor="address">Direccion</label>
      <input
        placeholder="Direccion"
        name="address"
        className="form-field"
        {...register("address", { required: true })}
      />

      <label htmlFor="email">Nombre</label>
      <input
        placeholder="Email"
        className="form-field"
        name="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="phone">Numero de celular</label>
      <input
        placeholder="Numero de celular"
        className="form-field"
        name="phone"
        {...register("phone", { required: true })}
      />

      <input type="submit" value="Registrar" className="btn" />
    </form>
  );
};
