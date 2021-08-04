import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import ilustrationIcon from "../static/cashpayment.png";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="header-svg flex flex-col items-center justify-between p-20 ">
        <h3 className="text-white text-5xl tracking-widest neonText lg:text-8xl ">
          IsOpenAt
        </h3>
        <form className="flex flex-col items-end" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar comercio..."
            className="h-12 rounded-full p-4 outline-none mb-2"
            {...register("shop", { required: true })}
          />
          <input
            className="bg-veryHighOrange p-2 w-full rounded-full text-white cursor-pointer"
            type="submit"
            value="Buscar"
          />
        </form>
      </div>
      <div className="flex flex-col items-center p-8 lg:flex-row lg:justify-between lg:p-20">
        <div className="text-white lg:w-1/2">
          <p className="mb-8 leading-8 lg:text-xl lg:leading-10">
            <span className="text-3xl font-semibold lg:text-5xl">IsOpenAt</span>
            <br />
            ¿Quieres saber si tus comercios favoritos estan abiertos? En
            IsOpenAt, podras saber la informacion de tus comercios favoritos,
            asi como de promociones, y reseñas de parte de otras personas.
            Tambien podras hacer reseñas por tu mismo, y aportar para poder
            tener la información mas reciente del comercio que mas te gusta.
          </p>
          <Link to="/shops" className="bg-veryHighOrange p-4">
            Ver comercios
          </Link>
        </div>

        <div className="mt-8 lg:w-1/4">
          <picture>
            <img
              src={ilustrationIcon}
              alt="ilustration"
              className="hidden lg:block lg:w-full lg:object-cover"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Home;
