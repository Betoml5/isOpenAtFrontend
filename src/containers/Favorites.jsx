import { useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { getFavorites } from "../services/User";

 const Favorites = (props) => {
  const { userFetched } = useUser();

  console.log("userfetched", userFetched);

  return <div></div>;
};

export default Favorites;
