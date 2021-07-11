import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const ShopForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const form = useRef("");
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "POST",
      url: "http://localhost:3013/api/shops/create",
      data,
    })
      .then(() => {
        Swal.fire({
          title: "Comercio Registrado",
          text: `Hey, ya quedo registrado ${watch("name")}`,
          confirmButtonText: "Ya quedo!",
        });
        form.current.reset();
      })
      .catch(() =>
        Swal.fire({
          title: "Error",
          text: "Uy! Hubo un error al registrar el comercio",
          icon: "error",
          confirmButtonText: "Ni pedo",
        })
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
      className="flex flex-col justify-center bg-white  p-4 max-w-xl lg:max-w-3xl mx-auto"
    >
      <h3 className="text-xl uppercase text-center my-4 bg-veryHighOrange p-4 text-white rounded-md">
        Afiliar nuevo comercio
      </h3>
      <label htmlFor="shopName">Nombre del comercio</label>
      <input
        placeholder="Nombre del comercio"
        name="shopName"
        className="form-field"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <label htmlFor="address">Direccion</label>
      <input
        placeholder="Direccion"
        name="address"
        className="form-field"
        {...register("address", { required: true })}
      />
      {errors.address && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <label htmlFor="email">Email</label>
      <input
        placeholder="Email"
        className="form-field"
        name="email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <label htmlFor="phone">Numero de celular</label>
      <input
        placeholder="Numero de celular"
        className="form-field"
        name="phone"
        {...register("phone", { required: true })}
      />
      {errors.phone && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <input type="submit" value="Registrar" className="btn cursor-pointer" />
    </form>
  );
};
