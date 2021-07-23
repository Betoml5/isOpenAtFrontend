import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShop, pushImageMenu, updateShop } from "../services/Shop";
import storage from "../firebase";
import { useForm } from "react-hook-form";

const EditShop = () => {
  const { id } = useParams();
  const [shop, setShop] = useState();
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await updateShop(id, data);
      console.log("submited");
      console.log("response", response);
      handleUpload(images);
    } catch (error) {
      console.log(error);
    }
  };

  function handleUpload(images) {
    images.forEach((image) => {
      const ref = storage.ref(`/images/${image.name}`);
      const uploadTask = ref.put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        console.error,
        async () => {
          const refURL = await ref.getDownloadURL();
          const response = await pushImageMenu(id, refURL);
          console.log(response);
        }
      );
    });
  }

  const handleChange = (e) => {
    setImages([...images, e.target.files[0]]);
    console.log(images);
  };

  useEffect(() => {
    const getShopFetched = async () => {
      const response = await getShop(id);
      setShop(response);
    };
    getShopFetched();
    return () => {
      setShop(null);
    };
  }, [id]);

  return (
    <div className="flex  justify-center items-center  min-h-screen">
      <form
        className="flex flex-col w-full max-w-md bg-white p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="form-field"
          placeholder="Nombre"
          {...register("name")}
        />
        <input
          type="text"
          className="form-field"
          placeholder="Ubicacion"
          {...register("address")}
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-field"
          placeholder="Numero del telefono"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
          {...register("phone")}
        />
        <input
          type="text"
          className="form-field"
          placeholder="Codigo de descuento"
          {...register("code")}
        />
        {/* <label htmlFor="images">Subir imagenes para exposicion</label> */}
        <span>Imagenes al momento {images?.length}</span>
        <label class="self-center w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer   text-black ease-linear transition-all duration-150">
          <i class="fas fa-cloud-upload-alt fa-3x"></i>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" class="hidden" onChange={handleChange} />
        </label>
        <input type="submit" value="Editar" className="btn my-4" />
      </form>
    </div>
  );
};

export default EditShop;
