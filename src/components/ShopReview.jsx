import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router-dom";
import {
  createReview,
  setRating,
  setAvgTime,
  setAvgPrice,
} from "../services/Shop";

const ShopReview = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const { id } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("avgprice"));
  console.log(watch("holdingtime"));

  const form = useRef("");

  const onSubmit = async (data) => {
    try {
      const createdReview = await createReview(
        id,
        data.email,
        data.name,
        data.comments
      );
      const ratingResponse = await setRating(id, ratingValue);
      const avgTimeResponse = await setAvgTime(id, data.holdingtime);
      const avgPriceResponse = await setAvgPrice(id, parseInt(data.avgprice));

      form.current.reset();
      history.goBack();
      console.log(avgPriceResponse);
      console.log(avgTimeResponse);
      console.log(ratingResponse);
      console.log(createdReview);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-11/12 mx-auto my-4 max-w-3xl">
        <form
          className="flex flex-col bg-white p-6 rounded-lg text-black shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
        >
          <label htmlFor="name" className=" font-normal text-2xl my-2">
            Nombre
          </label>
          <input
            type="text"
            className="form-field"
            name="name"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
          <label htmlFor="email" className=" font-normal text-2xl my-2">
            Email
          </label>
          <input
            type="text"
            className="form-field"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="field-required">Este campo es obligatorio</span>
          )}

          <label htmlFor="shopName" className=" text-2xl font-normal my-2">
            Tiempo de espera (Minutos)
          </label>
          <input
            type="number"
            className="form-field"
            name="email"
            placeholder="Tiempo de espera en minutos"
            {...register("holdingtime", { required: true })}
          />
          {errors.holdingtime && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
          <label htmlFor="shopName" className=" text-2xl font-normal my-2">
            Precio promedio
          </label>
          <input
            type="number"
            className="form-field"
            name="email"
            placeholder="Precio promedio"
            {...register("avgprice", { required: true })}
          />
          {errors.holdingtime && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
          <label htmlFor="comment" className=" font-normal text-2xl my-2">
            Cometarios
          </label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            className="form-field"
            placeholder="Comentarios"
            {...register("comments", { required: true })}
          ></textarea>
          {errors.comments && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
          <label htmlFor="shopName" className=" text-2xl font-normal my-2">
            Rating
          </label>
          <Rating
            fractions={2}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            className="text-yellow-400 my-4"
            initialRating={ratingValue}
            onChange={(value) => setRatingValue(value)}
          />
          {ratingValue <= 0 && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
          <button type="submit" className="btn ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopReview;
