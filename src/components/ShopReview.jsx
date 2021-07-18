import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { getShop } from "../services/Shop";

const ShopReview = () => {
  const [shop, setShop] = useState();
  const [rating, setRating] = useState(0);
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
    <div className="w-full ">
      <div className="w-11/12 mx-auto my-4 max-w-3xl">
        <form className="flex flex-col bg-veryLightRed p-6 rounded-lg ">
          <h3 className="text-3xl self-center mb-6 font-bold text-white ">
            {shop?.name}
          </h3>

          <label
            htmlFor="name"
            className="text-white font-normal text-2xl my-2"
          >
            Nombre
          </label>
          <input type="text" className="form-field" name="name" />

          <label
            htmlFor="email"
            className="text-white font-normal text-2xl my-2"
          >
            Email
          </label>
          <input type="text" className="form-field" name="email" />

          <label
            htmlFor="comment"
            className="text-white font-normal text-2xl my-2"
          >
            Cometarios
          </label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            className="p-4"
          ></textarea>
          <label
            htmlFor="shopName"
            className="text-white text-2xl font-normal my-2"
          >
            Rating
          </label>
          <Rating
            fractions={2}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            className="text-yellow-400 my-4"
            initialRating={rating}
            onChange={(value) => setRating(value)}
          />

          <button type="submit" className="btn ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopReview;
