import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { removeShop } from "../services/OwnerService";
import { getUser } from "../services/User";

const OwnerShops = () => {
  const { id } = useParams();
  const [userFetched, setUserFetched] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const responseUser = await getUser(id);
      setUserFetched(responseUser);
    };
    fetchUser();
  }, []);

  const handleRemoveShop = () => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminarlo?",
      text: "Esto no tendra marcha atras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeShop(userFetched?._id, id);
        history.push("/");
        Swal.fire("¡Borrado!", "Tu negocio ha sido eliminado.", "success");
      }
    });
  };

  return (
    <div className="grid mx-2 my-2 gap-2 min-h-screen md:grid-cols-2 lg:grid-cols-3 lg:my-0">
      {userFetched?.shops?.map((shop) => (
        <div key={shop?._id}>
          <div>
            <img src={shop?.imageCover} alt="" />
          </div>
          <div>
            <p>{shop?.name}</p>
            <p>{shop?.address}</p>
            <p>{shop?.code || "Aun no tienes codigo"}</p>
          </div>
          <div>
            <Link to={`/admin/edit-shop/${shop?._id}`}>Editar</Link>
            <button type="button" onClick={() => handleRemoveShop()}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OwnerShops;
