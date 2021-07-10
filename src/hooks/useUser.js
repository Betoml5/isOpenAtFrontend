import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { signup, signin, getUser } from "../services/User";
import Context from "../context/UserContext";
import { setState } from "expect";

export default function useUser() {
  const history = useHistory();

  const { jwt, setJwt, user, setUser, userFetched, setUserFetched } =
    useContext(Context);

  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    (username, password) => {
      setState({ loading: true, error: false });
      signin(username, password)
        .then((res) => {
          window.localStorage.setItem("jwt", res.token);
          window.localStorage.setItem("user", JSON.stringify(res.payload));
          setState({ loading: false, error: false });
          setJwt(res.token);
          setUser(res.payload);
        })
        .catch((err) => {
          window.localStorage.removeItem("jwt");
          window.localStorage.removeItem("user");
          setState({ loading: false, error: true });
          console.log(err);
        });
    },
    [setJwt, setUser]
  );
}

const register = useCallback((username, email, password) => {
  setState({ loading: true, error: false });
  signup(username, email, password)
    .then((res) => {
      setState({ loading: false, error: false });
      console.log(res);
    })
    .catch((error) => console.log(error));
}); 




