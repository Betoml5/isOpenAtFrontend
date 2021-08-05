import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Shop from "../components/Shop";
import { getFavorites } from "../services/User";
import useUser from "../hooks/useUser";
import { Helmet } from "react-helmet";

const Favorites = () => {
  const { id } = useParams();
  const [favorites, setFavorites] = useState([]);
  const { isLogged } = useUser();
  const history = useHistory();

  useEffect(() => {
    const getUserFavorites = async (id) => {
      try {
        const response = await getFavorites(id);

        console.log("favorites", response);
        setFavorites(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUserFavorites(id);
    return () => {
      setFavorites([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (favorites?.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-white font-bold">
        <Helmet htmlAttributes>
          <html lang="es" />
          <title>IsOpenAt - Favoritos</title>
          <meta name="description" content="Favorites" />
        </Helmet>
        Aún no agregas favoritos :(
      </div>
    );
  }

  return (
    <div className="grid min-h-screen mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <Helmet htmlAttributes>
        <html lang="es" />
        <title>IsOpenAt - Favoritos</title>
        <meta name="description" content="Favorites" />
      </Helmet>
      {favorites?.map((favorite) => (
        <Shop {...favorite} />
      ))}
    </div>
  );
};

export default Favorites;
