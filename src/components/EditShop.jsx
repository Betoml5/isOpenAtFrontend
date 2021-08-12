import { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getShop, pushImageMenu, updateShop } from "../services/Shop";
import storage from "../firebase";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import downArrowIcon from "../static/down-arrow.png";
import restaurantCover from "../static/restaurantCover.jpg";

const EditShop = () => {
  const API = `http://api.positionstack.com/v1/forward?access_key=ef449ba03412c67915b892fbbfd5bdad&query=`;

  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [coords, setcoords] = useState({ lat: 27.9324, lng: -101.1255 });
  const [address, setAddress] = useState("");
  const [imageCover, setImageCover] = useState("");
  const [schedule, setSchedule] = useState([]);

  const [basicInformationView, setBasicInformationView] = useState(false);
  const [scheduleView, setScheduleView] = useState(false);
  const [locationView, setLocationView] = useState(false);
  const [imageCoverView, setImageCoverView] = useState(false);
  const [uploadImagesView, setUploadImagesView] = useState(false);
  const [removeImagesView, setRemoveImagesView] = useState(false);

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
      const editedSchedule = {
        schedule: [
          {
            day: "Lunes",
            range: [schedule["Lunesfrom"], schedule["Lunesto"]],
          },
          {
            day: "Martes",
            range: [schedule["Martesfrom"], schedule["Martesto"]],
          },
          {
            day: "Miercoles",
            range: [schedule["Miercolesfrom"], schedule["Miercolesto"]],
          },
          {
            day: "Jueves",
            range: [schedule["Juevesfrom"], schedule["Juevesto"]],
          },
          {
            day: "Viernes",
            range: [schedule["Viernesfrom"], schedule["Viernesto"]],
          },
          {
            day: "Sabado",
            range: [schedule["Sabadofrom"], schedule["Sabadoto"]],
          },
          {
            day: "Domingo",
            range: [schedule["Domingofrom"], schedule["Domingoto"]],
          },
        ],
      };
      await updateShop(id, data);
      await updateShop(id, datacoords);
      await updateShop(id, editedSchedule);
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
    <div className="flex flex-col min-h-screen">
      <form
        className="flex flex-col bg-white p-4 min-h-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="flex justify-between items-center my-2"
          onClick={() => {
            setBasicInformationView(!basicInformationView);
          }}
        >
          <h3 className="text-xl ">Información basica</h3>
          <img src={downArrowIcon} alt="downArrowIcon" className="w-4" />
        </div>
        {basicInformationView && (
          <div className="mt-4">
            <div className="flex flex-col">
              <label htmlFor="name">Nombre del negocio</label>
              <input
                type="text"
                placeholder="Nombre del negocio"
                className="form-field"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Este campo es obligatorio</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Direccion del negocio</label>
              <input
                type="text"
                placeholder="Direccion del negocio"
                className="form-field"
                {...register("address", { required: true })}
              />
              {errors.address && <span>Este campo es obligatorio</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Numero de telefono</label>
              <input
                type="tel"
                placeholder="Numero de telefono"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                className="form-field"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>Este campo es obligatorio</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="code">Codigo de descuento</label>
              <input
                type="text"
                placeholder="Codigo de descuento"
                className="form-field"
                {...register("code", { required: true })}
              />
            </div>
          </div>
        )}
        <div
          className="flex justify-between items-center my-2"
          onClick={() => {
            setScheduleView(!scheduleView);
          }}
        >
          <h3 className="text-xl ">Horario</h3>
          <img src={downArrowIcon} alt="downArrowIcon" className="w-4" />
        </div>
        {scheduleView &&
          shop?.schedule?.map((item) => (
            <div className="flex flex-col my-2">
              <p className="text-xl text-veryHighOrange">{item.day}</p>
              <span className="font-bold">Abierto de: </span>
              <input
                type="time"
                name={item?.day + "from"}
                onChange={(e) => {
                  setSchedule({
                    ...schedule,
                    [e.target.name]: e.target.value,
                  });
                  console.log(schedule["Lunesto"]);
                }}
              />
              <span className="font-bold">A:</span>
              <input
                type="time"
                name={item?.day + "to"}
                onChange={(e) => {
                  setSchedule({
                    ...schedule,
                    [e.target.name]: e.target.value,
                  });
                  console.log(schedule["Lunesto"]);
                }}
              />
            </div>
          ))}
        <div
          className="flex justify-between items-center my-2"
          onClick={() => {
            setLocationView(!locationView);
          }}
        >
          <h3 className="text-xl">Ubicación</h3>
          <img src={downArrowIcon} alt="downArrowIcon" className="w-4" />
        </div>
        {locationView && (
          <div>
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
        )}
        <div
          className="flex justify-between items-center my-2"
          onClick={() => {
            setImageCoverView(!imageCoverView);
          }}
        >
          <h3 className="text-xl">Imagen de portada</h3>
          <img src={downArrowIcon} alt="downArrowIcon" className="w-4" />
        </div>
        {imageCoverView && (
          <div>
            <div className="w-80">
              <img
                src={shop?.imageCover || restaurantCover}
                alt="imageCover"
                className="w-full"
              />
              <input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImageCover(e.target.files[0]);
                }}
              />
            </div>
          </div>
        )}

        <div
          className="flex justify-between items-center my-2"
          onClick={() => {
            setUploadImagesView(!uploadImagesView);
          }}
        >
          <h3 className="text-xl">Agregar productos</h3>
          <img src={downArrowIcon} alt="downArrowIcon" className="w-4" />
        </div>

        {uploadImagesView && (
          <div className="flex flex-col">
            <span className="my-4">imagenes al momento {images?.length}</span>
            <label class="self-center w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer   text-black ease-linear transition-all duration-150">
              <i class="fas fa-cloud-upload-alt fa-3x"></i>
              <span class="mt-2 text-base leading-normal">
                Selecciona archivos
              </span>
              <input type="file" class="hidden" onChange={handleChange} />
            </label>
            <progress
              className="self-center my-4"
              value={progress}
              max={100}
            ></progress>
          </div>
        )}

        <div
          className="flex justify-between items-center my-2"
          onClick={() => {
            setRemoveImagesView(!removeImagesView);
          }}
        >
          <h3 className="text-xl">Eliminar productos</h3>
          <img src={downArrowIcon} alt="downArrowIcon" className="w-4" />
        </div>

        {removeImagesView && (
          <div className="flex p-4 foodSlider lg:justify-evenly">
            {shop?.imagesMenu?.map((image) => (
              <div className="sliderProductItem" key={image}>
                <img src={image} alt="imageMenu" className=" rounded-2xl" />
              </div>
            ))}
          </div>
        )}

        <input
          type="submit"
          value="Editar"
          className="btn my-4 cursor-pointer"
        />

        {/* <input
          type="submit"
          value="Editar"
          className="btn w-full mt-6 cursor-pointer md:w-1/2  lg:w-1/4"
          disabled={!register}
        /> */}

        {/* (
          <div className="flex p-4 foodSlider lg:justify-evenly">
            {shop?.imagesMenu?.map((image) => (
              <div className="sliderProductItem" key={image}>
                <img src={image} alt="imageMenu" className=" rounded-2xl" />
              </div>
            ))}
          </div>
        ) */}

        {/* <div className="flex flex-col">
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
     
        <div className="flex flex-col">
          <span>imagenes al momento {images?.length}</span>
          <label class="self-center w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer   text-black ease-linear transition-all duration-150">
            <i class="fas fa-cloud-upload-alt fa-3x"></i>
            <span class="mt-2 text-base leading-normal">
              Selecciona archivos
            </span>
            <input type="file" class="hidden" onChange={handleChange} />
          </label>
          <progress
            className="self-center my-4"
            value={progress}
            max={100}
          ></progress>
        </div>
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
        </div>{" "}
        */}
      </form>
    </div>
  );
};

export default EditShop;
