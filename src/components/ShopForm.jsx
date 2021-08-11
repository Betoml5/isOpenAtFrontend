/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { createShop, setImageCover } from "../services/Shop";
import { useHistory } from "react-router-dom";
import { getUser } from "../services/User";

import storage from "../firebase";
import useUser from "../hooks/useUser";

const ShopForm = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useUser();
  const [view, setView] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [userFetched, setUserFetched] = useState({});

  const userParsed = JSON.parse(user);

  function handleChange(e) {
    console.log(e.target.files[0].name);
    setFile(e.target.files[0]);
  }

  const form = useRef("");
  const onSubmit = (data) => {
    createShop(data.name, data.address, data.email, data.phone)
      .then((response) => {
        const ref = storage.ref(`/images/${file?.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progressData =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progressData);
          },
          console.error,
          () => {
            ref.getDownloadURL().then((url) => {
              setFile(null);
              setURL(url);
              setImageCover(response?._id, url);
              setTimeout(() => {
                setView(!view);
              }, 100);
              history.push("/");
            });
          }
        );
        form.current.reset();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getUserFetched = async () => {
      const response = await getUser(userParsed?._id);
      setUserFetched(response);
    };
    getUserFetched();
    return () => {
      setUserFetched(null);
    };
  }, [userParsed?._id]);

  if (userFetched?.admin === false) {
    history.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
      className="flex flex-col justify-center bg-white  p-4 max-w-xl lg:max-w-3xl mx-auto"
    >
      <h3 className="text-xl uppercase text-center my-4 bg-veryHighOrange p-4 text-white rounded-md">
        Afiliar nuevo negocio
      </h3>
      <label htmlFor="shopName">Nombre del negocio</label>
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
      {/* <label htmlFor="email">Email</label>
      <input
        placeholder="Email"
        className="form-field"
        name="email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="field-required">Este campo es obligatorio</span>
      )} */}
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

      {/* <label htmlFor="rangeHours">Rango de horas</label> */}
      {/* 
      <div className="flex items-center">
        <p className="mr-4">De: </p>
        <input
          type="time"
          className="form-field"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className="mx-4">A: </p>
        <input
          type="time"
          className="form-field"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div> */}

      <label htmlFor="imageCover" className="my-4">
        Imagen de portada
      </label>
      <label className="self-center w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer  hover:text-veryHighOrange text-black ease-linear transition-all duration-150">
        <i className="fas fa-cloud-upload-alt fa-3x"></i>
        <span className="mt-2 text-base leading-normal text-center">
          Selecciona un archivo
        </span>
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      <progress
        className="self-center my-4"
        value={progress}
        max={100}
      ></progress>

      <input
        type="submit"
        value="Registrar"
        className="btn cursor-pointer my-4"
      />
    </form>
  );
};

export default ShopForm;
