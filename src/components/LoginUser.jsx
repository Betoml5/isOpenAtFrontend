import { useRef } from "react";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";

export const LoginUser = () => {
  const { loginUser, state } = useUser();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const form = useRef("");
  const onSubmit = ({ username, password }) => {
    loginUser(username, password);
    form.current.reset();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        className="flex flex-col  justify-center rounded-md bg-white  p-6 max-w-xl lg:max-w-3xl lg:w-1/2 lg:h-auto "
      >
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
        <p className="text-center  my-6">
          ¿Aún no tienes cuenta?{" "}
          <Link to="sign-up" className="text-veryHighOrange">
            Registrate
          </Link>
        </p>
        <input type="submit" value="Ingresar" className="btn cursor-pointer" />
      </form>
    </div>
  );
};
