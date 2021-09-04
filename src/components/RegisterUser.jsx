import { useRef } from "react";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import validator from "validator";

const RegisterUser = () => {
  const { registerUser } = useUser();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const form = useRef("");
  const onSubmit = ({ username, email, password }) => {
    if (!validator.isEmail(email)) {
      setError("email", {
        type: "manual",
        message: "El correo debe ser un correo valido",
      });
    } else {
      registerUser(username, email, password);
      Swal.fire({
        title: "Usuario registrado",
        text: `Usuario '${username}' registrado`,
        confirmButtonText: "Ya quedo!",
      });
      form.current.reset();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        className="flex flex-col  justify-center rounded-md bg-white  p-6 w-11/12 max-w-xl lg:max-w-3xl mx-auto"
      >
        <label htmlFor="username">Nombre de usuario</label>
        <input
          placeholder="Nombre de usuario"
          name="username"
          className="form-field"
          type="text"
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
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="field-required">{errors?.email?.message}</span>
        )}

        <label htmlFor="password">Contraseña</label>
        <input
          placeholder="Contraseña"
          className="form-field"
          name="password"
          type="password"
          required
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="field-required">Este campo es obligatorio</span>
        )}
        <p className="text-center  my-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="sign-in" className="text-veryHighOrange">
            Inicia sesión
          </Link>
        </p>
        <input
          type="submit"
          value="Registrarse"
          className="btn cursor-pointer"
        />
      </form>
    </div>
  );
};

export default RegisterUser;
