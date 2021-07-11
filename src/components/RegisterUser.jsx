import { useRef } from "react";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const RegisterUser = () => {
  const { registerUser } = useUser();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const form = useRef("");
  const onSubmit = ({ username, email, password }) => {
    registerUser(username, email, password);
    Swal.fire({
      title: "Usuario registrado",
      text: `Usuario '${username}' registrado`,
      confirmButtonText: "Ya quedo!",
    });
    form.current.reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
      className="flex flex-col h-screen justify-center bg-white  p-4 max-w-xl lg:max-w-3xl mx-auto"
    >
      <h3 className="text-xl uppercase text-center my-4 bg-veryHighOrange p-4 text-white rounded-md">
        Registrate
      </h3>
      <label htmlFor="username">Nombre de usuario</label>
      <input
        placeholder="Nombre de usuario"
        name="username"
        className="form-field"
        {...register("username", { required: true })}
      />
      {errors.username && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <label htmlFor="email">Email</label>
      <input
        placeholder="Email"
        name="email"
        className="form-field"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <label htmlFor="password">Contraseña</label>
      <input
        placeholder="Contraseña"
        className="form-field"
        name="password"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <p className="text-center  my-2">
        ¿Ya tienes cuenta?{" "}
        <Link to="sign-in" className="text-veryHighOrange">
          Inicia sesión
        </Link>
      </p>
      <input type="submit" value="Registrarse" className="btn cursor-pointer" />
    </form>
  );
};
