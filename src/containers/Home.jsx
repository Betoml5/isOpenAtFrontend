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
        <h3 className="text-7xl text-white">IsOpenAt</h3>
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
          <p className="mb-8 leading-8">
            <span className="text-3xl font-semibold">IsOpenAt</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at
            voluptates, consequatur iste tempora molestias voluptate, laudantium
            magnam sint dolorem sapiente provident vitae esse ut reiciendis
            pariatur possimus eos voluptatibus. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Eos aspernatur tempore eaque. Ipsam
            alias impedit asperiores tempora, natus at, aliquam enim fugiat,
            temporibus vel dolorum dolores. Ab rem similique dolor.
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
