import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { signup, signin, getUser, setImage } from "../services/User";
import Context from "../context/userContext";
import Swal from "sweetalert2";

export default function useUser() {
  const history = useHistory();

  const { jwt, setJwt, user, setUser, userFetched, setUserFetched } =
    useContext(Context);

  const [state, setState] = useState({ loading: false, error: false });

  const loginUser = useCallback(
    (username, password) => {
      setState({ loading: true, error: false });
      signin(username, password)
        .then((res) => {
          console.log(res.data.body);
          window.localStorage.setItem("jwt", res.data.token);
          window.localStorage.setItem("user", JSON.stringify(res.data.body));
          setState({ loading: false, error: false });
          setJwt(res.data.token);
          setUser(JSON.stringify(res.data.body));
          history.push("/");
        })
        .catch((err) => {
          window.localStorage.removeItem("jwt");
          window.localStorage.removeItem("user");
          setState({ loading: false, error: true });
          Swal.fire({
            title: "Ups",
            text: `Credenciales incorrectas :( `,
            confirmButtonText: "Ni pedo",
            icon: "error",
          });
          console.log(err);
        });
    },
    [setJwt, setUser]
  );

  const registerUser = useCallback((username, email, password) => {
    setState({ loading: true, error: false });
    signup(username, email, password)
      .then((res) => {
        setState({ loading: false, error: false });
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("user");
    setUser(null);
    setJwt(null);
    history.push("/");
  }, [setJwt, setUser]);

  const getOneUser = useCallback(
    (id) => {
      getUser(id).then((res) => {
        setUserFetched(res);
      });
    },
    [setUserFetched]
  );

  const setImageUser = useCallback((imageURL) => {
    setImage(imageURL).then((res) => res);
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
    state,
  };
}
