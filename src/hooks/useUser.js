import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signup,
  signin,
  getUser,
  setImage,
  getFavorites,
  addFavorite,
} from "../services/User";
import Context from "../context/userContext";
import Swal from "sweetalert2";

export default function useUser() {
  const history = useHistory();

  const {
    jwt,
    setJwt,
    user,
    setUser,
    userFetched,
    setUserFetched,
    setFavorites,
  } = useContext(Context);

  const [state, setState] = useState({ loading: false, error: false });

  const loginUser = useCallback(
    async (username, password) => {
      try {
        setState({ loading: true, error: false });
        const res = await signin(username, password);
        window.localStorage.setItem("jwt", res.data.token);
        window.localStorage.setItem("user", JSON.stringify(res.data.body));
        setState({ loading: false, error: false });
        setJwt(res.data.token);
        setUser(JSON.stringify(res.data.body));
        console.log(res.data.body);
        history.push("/");
        console.log(res.data.body);
      } catch (error) {
        window.localStorage.removeItem("jwt");
        window.localStorage.removeItem("user");
        setState({ loading: false, error: true });
        Swal.fire({
          title: "Ups",
          text: `Credenciales incorrectas :( `,
          confirmButtonText: "Ni pedo",
          icon: "error",
        });
        console.log(error);
      }
    },
    [setJwt, setUser]
  );

  const registerUser = useCallback(async (username, email, password) => {
    try {
      setState({ loading: true, error: false });
      const res = await signup(username, email, password);
      setState({ loading: false, error: false });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("user");
    setUser(null);
    setJwt(null);
    history.push("/");
  }, [setJwt, setUser]);

  const getOneUser = useCallback(
    async (id) => {
      try {
        const res = await getUser(id);
        setUserFetched(res);
      } catch (error) {
        console.log(error);
      }
    },
    [setUserFetched]
  );

  const addFavorites = useCallback(async (userId, shopId) => {
    try {
      const res = await addFavorite(userId, shopId);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setImageUser = useCallback(async (imageURL) => {
    try {
      const res = await setImage(imageURL);
      return res;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoadingError: state.error,
    loginUser,
    logout,
    registerUser,
    user,
    getOneUser,
    userFetched,
    setImageUser,
    setUserFetched,
    addFavorites,
    setFavorites,
  };
}
