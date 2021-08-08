import { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getShop, pushImageMenu, updateShop } from "../services/Shop";
import storage from "../firebase";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const EditShop = () => {
  // 146 Sierra de sacramento, Coahuila
  // Esta es la forma para busccar

  const API = `http://api.positionstack.com/v1/forward?access_key=ef449ba03412c67915b892fbbfd5bdad&query=`;

  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [cords, setCords] = useState({ lat: 27.9324, lng: -101.1255 });
  const [address, setAddress] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      // Cree un objeto para poder enviarlo.
      const datacords = {
        location: {
          lat: cords.lat.toFixed(6),
          lng: cords.lng.toFixed(6),
        },
      };
      await updateShop(id, data);
      await updateShop(id, datacords);
      handleUpload(images);
    } catch (error) {
      console.log(error);
    }
  };

  function handleUpload(imagesArray) {
    imagesArray.forEach((image) => {
      const ref = storage.ref(`/images/${image.name}`);
      const uploadTask = ref.put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressData =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressData);
        },
        console.error,
        async () => {
          const refURL = await ref.getDownloadURL();
          await pushImageMenu(id, refURL);
        }
      );
    });
    history.push("/shops");
  }

  //TODO
  //Si no hay datos, el shop quedara con datos vacios.
  const handleChange = (e) => {
    setImages([...images, e.target.files[0]]);
  };

  useEffect(() => {
    const getShopFetched = async () => {
      const response = await getShop(id);
      setShop(response);
      console.log("shop to edit", response);
    };
    getShopFetched();
    return () => {
      setShop(null);
    };
  }, [id]);

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
    iconUrl: require("leaflet/dist/images/marker-icon.png").default,
    shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
  });

  function MyComponent({ cords }) {
    // const map = useMap();
    // map.on(
    //   "click",
    //   useCallback(({ latlng }) => {
    //     console.log("setting cords...");
    //     setCords({
    //       lat: latlng.lat,
    //       lng: latlng.lng,
    //     });
    //   }, [])
    // );

    return <Marker position={cords} />;
  }

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, 13);

    return null;
  }

  const fetchCords = async (address) => {
    const response = await fetch(API + address);
    const cords = await response.json();
    setCords({
      lat: cords.data[0].latitude,
      lng: cords.data[0].longitude,
    });
    console.log("cords", cords.data[0]);
  };

  return (
    <div className="flex  justify-center items-center  min-h-screen">
      <form
        className="flex flex-col w-full max-w-lg bg-white p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Nombre - {shop?.name} (Nombre anterior)</label>
        <input
          type="text"
          className="form-field"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />

        {errors.name && (
          <span className="field-required">Este campo es obligatorio</span>
        )}
        <label htmlFor="address">
          Direccion - {shop?.address} (Direccion anterior)
        </label>

        <input
          type="text"
          className="form-field"
          placeholder="Direccion"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className="field-required">Este campo es obligatorio</span>
        )}
        <label htmlFor="phone">
          Telefono - {shop?.phone} (Telefono anterior)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-field"
          placeholder="Numero del telefono"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="field-required">Este campo es obligatorio</span>
        )}
        <label htmlFor="code">
          Codigo de descuento - {shop?.code} (Codigo anterior)
        </label>
        <input
          type="text"
          className="form-field"
          placeholder="Codigo de descuento"
          {...register("code", { required: true })}
        />
        {errors.code && (
          <span className="field-required">Este campo es obligatorio</span>
        )}
        {/* <label htmlFor="images">Subir imagenes para exposicion</label> */}
        <span>imagenes al momento {images?.length}</span>
        <label class="self-center w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer   text-black ease-linear transition-all duration-150">
          <i class="fas fa-cloud-upload-alt fa-3x"></i>
          <span class="mt-2 text-base leading-normal">Selecciona archivos</span>
          <input type="file" class="hidden" onChange={handleChange} />
        </label>
        <progress
          className="self-center my-4"
          value={progress}
          max={100}
        ></progress>

        <h3 className="my-4">Selecciona ubicacion</h3>
        <div className="justify-center ">
          <input
            type="text"
            className="form-field w-3/4"
            placeholder="Sierra mojada 102, Colinas del pedregal, Nueva Rosita, Mexico"
            onChange={onChangeAddress}
          />
          <button
            onClick={() => fetchCords(address)}
            type="button"
            className="bg-veryHighOrange p-4 text-white rounded-tr-md rounded-br-md"
          >
            Buscar
          </button>
        </div>
        <MapContainer
          center={cords || [27.8617, -101.1255]}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "350px", zIndex: "0" }}
          zoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent cords={cords} />
          <ChangeMapView coords={cords} />
        </MapContainer>
        <input
          type="submit"
          value="Editar"
          className="btn my-4 cursor-pointer"
          disabled={!register}
        />
      </form>
    </div>
  );
};

export default EditShop;
