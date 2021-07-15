import React, { useState } from "react";

// Aqui vamos a declarar un contexto de usuario
// Este contexto que tenemos lo vamos a tener disponible en todo la aplicacion
// solamente encapsulando con este mismo contexto a la App

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.localStorage.getItem("jwt"));
  const [user, setUser] = useState(() => window.localStorage.getItem("user"));
  const [userFetched, setUserFetched] = useState(() => {});
  const [shops, setShops] = useState([]);

  return (
    <Context.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        userFetched,
        setUserFetched,
        shops,
        setShops,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
