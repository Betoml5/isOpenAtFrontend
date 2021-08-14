/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { createShop, setImageCover } from "../services/Shop";
import { useHistory } from "react-router-dom";
import { getUser } from "../services/User";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import storage from "../firebase";
import useUser from "../hooks/useUser";
import { addShop } from "../services/OwnerService";

const ShopForm = () => {
  const API = `http://api.positionstack.com/v1/forward?access_key=ef449ba03412c67915b892fbbfd5bdad&query=`;

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useUser();
  const [coords, setcoords] = useState({ lat: 27.9324, lng: -101.1255 });
  const [address, setAddress] = useState("");
  const [view, setView] = useState(false);
  const [url, setURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [userFetched, setUserFetched] = useState({});

  const userParsed = JSON.parse(user);

  const form = useRef("");
  const onSubmit = (data) => {
    console.log(data.image[0].name);
    const location = {
      lat: coords.lat.toFixed(6),
      lng: coords.lng.toFixed(6),
    };

    createShop(data.name, data.address, data.phone, location)
      .then((response) => {
        console.log(response);
        addShop(userFetched?._id, response?._id);
        const ref = storage.ref(`/images/${data.image[0]?.name}`);
        const uploadTask = ref.put(data.image[0]);
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
              console.log(url);
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

  if (userFetched?.owner === false) {
    history.push("/");
  }
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
    iconUrl: require("leaflet/dist/images/marker-icon.png").default,
    shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
  });

  function MyComponent({ coords }) {
    return <Marker position={coords} />;
  }

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, 13);
    return null;
  }
  const fetchcoords = async (address) => {
    const response = await fetch(API + address);
    const coords = await response.json();
    setcoords({
      lat: coords.data[0].latitude || 0,
      lng: coords.data[0].longitude || 0,
    });
    console.log("coords", coords.data[0]);
  };

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

      <label htmlFor="imageCover" className="my-4">
        Imagen de portada
      </label>
      <label className="self-center w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer  hover:text-veryHighOrange text-black ease-linear transition-all duration-150">
        <i className="fas fa-cloud-upload-alt fa-3x"></i>
        <span className="mt-2 text-base leading-normal text-center">
          Selecciona un archivo
        </span>
        <input
          type="file"
          className="hidden"
          name="image"
          {...register("image", { required: true })}
        />
      </label>

      <progress
        className="self-center my-4"
        value={progress}
        max={100}
      ></progress>
      {errors.image && (
        <span className="field-required">Este campo es obligatorio</span>
      )}
      <div className="flex flex-col lg:w-full">
        <h3 className="my-4">Selecciona ubicacion</h3>
        <div className="justify-center ">
          <input
            type="text"
            className="form-field w-3/4"
            placeholder="Sierra mojada 102, Colinas del pedregal, Nueva Rosita, Mexico"
            onChange={onChangeAddress}
          />
          <button
            onClick={() => fetchcoords(address)}
            type="button"
            className="bg-veryHighOrange p-4 text-white rounded-tr-md rounded-br-md w-1/4"
          >
            Buscar
          </button>
        </div>
        <MapContainer
          center={coords || [27.8617, -101.1255]}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "350px", zIndex: "0" }}
          zoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent coords={coords} />
          <ChangeMapView coords={coords} />
        </MapContainer>
      </div>
      <input type="submit" value="Crear" className="btn cursor-pointer my-4" />
    </form>
  );
};

export default ShopForm;
