import { useEffect } from "react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import {
  createReview,
  setRating,
  setAvgTime,
  setAvgPrice,
} from "../services/Shop";
import { getUser } from "../services/User";

const ShopReview = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [userFetched, setUserFetched] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const { user } = useUser();

  const userParsed = JSON.parse(user);

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
        userFetched?.email,
        userFetched?.username,
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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUser(userParsed?._id);
      setUserFetched(fetchedUser);
    };
    fetchData();
    return () => {
      setUserFetched({});
    };
  }, []);

  return (
    <div className="w-full ">
      <div className="w-11/12 mx-auto my-4 max-w-3xl">
        <form
          className="flex flex-col bg-white p-6 rounded-lg text-black shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
        >
          <label htmlFor="shopName" className=" text-2xl font-normal my-2">
            Tiempo de espera (Minutos)
          </label>
          <input
            type="number"
            className="form-field"
            name="email"
            placeholder="15..."
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
            placeholder="$150"
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
            placeholder="Comentarios..."
            {...register("comments", { required: true })}
          ></textarea>
          {errors.comments && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
          <label htmlFor="shopName" className=" text-2xl font-normal my-2">
            Calificacion
          </label>
          <Rating
            fractions={2}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            className="text-yellow-400 my-4"
            initialRating={ratingValue}
            onChange={(value) => setRatingValue(value)}
          />
          {/* {ratingValue <= 0 && (
            <span className="field-required">Este campo es obligatorio</span>
          )} */}
          <button type="submit" className="btn ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopReview;
