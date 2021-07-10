import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/UserContext";

export default function useUser() {
  const history = useHistory();

  const { jwt, setJwt, user, setUser, userFetched, setUserFetched } =
    useContext(Context);

  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback((email, password) => {
    setState({ loading: true, error: false });
    
  });
}
