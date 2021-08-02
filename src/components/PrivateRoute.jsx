import { Redirect, Route } from "react-router-dom";
import useUser from "../hooks/useUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useUser();

  return (
    <Route {...rest}>
      {isLogged ? <Component /> : <Redirect to="/sign-in" />}
    </Route>
  );
};

export default PrivateRoute;
