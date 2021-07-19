import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router-dom";
import { createReview, getShop } from "../services/Shop";

const ShopReview = () => {
  const [shop, setShop] = useState();
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const form = useRef("");

  const onSubmit = async (data) => {
    const response = await createReview(
      id,
      data.email,
      data.name,
      data.comments
    );
    form.current.reset();
    history.goBack();
    console.log(response);
  };


  return (
    <div className="w-full ">
      <div className="w-11/12 mx-auto my-4 max-w-3xl">
        <form
          className="flex flex-col bg-white p-6 rounded-lg text-black shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
        >
          <h3 className="text-3xl self-center mb-6 font-bold ">{shop?.name}</h3>

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
            initialRating={rating}
            onChange={(value) => setRating(value)}
          />
          {rating <= 0 && (
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
