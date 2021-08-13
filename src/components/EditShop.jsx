import { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getShop, pushImageMenu, updateShop } from "../services/Shop";
import storage from "../firebase";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import restaurantCover from "../static/restaurantCover.jpg";

const EditShop = () => {
  const API = `http://api.positionstack.com/v1/forward?access_key=ef449ba03412c67915b892fbbfd5bdad&query=`;

  const { id } = useParams();
  console.log(typeof id);
  const [shop, setShop] = useState({});
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [coords, setcoords] = useState({ lat: 27.9324, lng: -101.1255 });
  const [address, setAddress] = useState("");
  const [imageCover, setImageCover] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
      return shop;
    }, [shop]),
  });
  const history = useHistory();

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      // Cree un objeto para poder enviarlo.
      const datacoords = {
        location: {
          lat: coords.lat.toFixed(6),
          lng: coords.lng.toFixed(6),
        },
      };
      await updateShop(id, data);
      await updateShop(id, datacoords);
      handleUpload(images).then(() => history.push("/shops"));
    } catch (error) {
      console.log(error);
    }
  };

  async function handleUpload(imagesArray) {
    const ref = storage.ref(`/images/${imageCover.name}`);
    const uploadTask = ref.put(imageCover);
    uploadTask.on(
      "state_changed",
      (snapshot) => console.log(snapshot),
      console.error,
      async () => {
        const refURL = await ref.getDownloadURL();
        const shopUpdated = {
          imageCover: refURL,
        };
        await updateShop(id, shopUpdated);
      }
    );
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
  }

  //Si no hay datos, el shop quedara con datos vacios.
  const handleChange = (e) => {
    setImages([...images, e.target.files[0]]);
  };
  useEffect(() => {
    reset(shop);
  }, [shop]);

  useEffect(() => {
    const getShopFetched = async () => {
      const response = await getShop(id);
      console.log(response);
      setShop(response);
    };

    getShopFetched();
    setcoords({
      lat: shop?.location?.lat || 27.9324,
      lng: shop?.location?.lng || -101.1255,
    });
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
      lat: coords.data[0].latitude,
      lng: coords.data[0].longitude,
    });
    console.log("coords", coords.data[0]);
  };

  return (
    <div className="flex  justify-center items-center  min-h-screen">
      <form
        className="flex flex-col w-full max-w-lg bg-white p-6 md:max-w-full lg:flex-row lg:flex-wrap lg:gap-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-field"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />

          {errors.name && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">Direccion</label>

          <input
            type="text"
            className="form-field"
            placeholder="Direccion"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Telefono</label>
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
        </div>
        <div className="flex flex-col">
          <label htmlFor="code">Codigo de descuento</label>
          <input
            type="text"
            className="form-field"
            placeholder="Codigo de descuento"
            {...register("code", { required: true })}
          />
          {errors.code && (
            <span className="field-required">Este campo es obligatorio</span>
          )}
        </div>
        {/* <label htmlFor="images">Subir imagenes para exposicion</label> */}
        <div className="flex flex-col lg:w-full">
          <span>Subir productos</span>
          <span className="">imagenes al momento {images?.length}</span>
          <label class=" w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer   text-black ease-linear transition-all duration-150 ">
            <i class="fas fa-cloud-upload-alt fa-3x"></i>
            <span class="mt-2 text-base leading-normal">
              Selecciona archivos
            </span>
            <input type="file" class="hidden" onChange={handleChange} />
          </label>
          <progress className=" my-4 " value={progress} max={100}></progress>
        </div>

        <div>
          <h4 className="my-4">Cambiar imagen de portada </h4>
          <div className="w-80">
            <img
              src={shop?.imageCover || restaurantCover}
              alt="imageCover"
              className="w-full"
            />
            <label class="self-center my-4 w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer   text-black ease-linear transition-all duration-150 lg:self-start">
              <i class="fas fa-cloud-upload-alt fa-3x"></i>
              <span class="mt-2 text-base leading-normal">
                Selecciona imagen
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImageCover(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </div>

        {/* <div className="flex flex-col w-full text-center">
          <Link
            className="btn w-1/2 md:w-1/3"
            to={`/admin/shop-schedule/${id}`}
          >
            Editar horario
          </Link>
        </div> */}

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
          <input
            type="submit"
            value="Editar"
            className="btn my-4 cursor-pointer"
            disabled={!register}
          />
        </div>
      </form>
    </div>
  );
};

export default EditShop;
