import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import NotFound from "./containers/NotFound";
import { UserContextProvider } from "./context/userContext";
import { lazy } from "react";
import ShopReview from "./components/ShopReview";
import { initAxiosInterceptors } from "./services/auth-helpers";
import EditShop from "./components/EditShop";
import Location from "./containers/Location";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./containers/Home";
import DicesAnimation from "./components/DicesAnimation";
import ShopSchedule from "./components/ShopSchedule";

const ShopDetail = lazy(() => import("./components/ShopDetail"));
const ShopContainer = lazy(() => import("./containers/ShopContainer"));
const ShopForm = lazy(() => import("./components/ShopForm"));
const RegisterUser = lazy(() => import("./components/RegisterUser"));
const LoginUser = lazy(() => import("./components/LoginUser"));
const User = lazy(() => import("./components/User"));
const Favorites = lazy(() => import("./containers/Favorites"));
const ControlPanel = lazy(() => import("./containers/ControlPanel"));


initAxiosInterceptors();
const App = () => {
  //Aqui Cualquier provider
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/shops" component={ShopContainer} />
            <Route
              exact={true}
              path="/shops/review/:id"
              component={ShopReview}
            />
            <Route
              exact={true}
              path="/shops/detail/:id"
              component={ShopDetail}
            />
            <Route exact={true} path="/dices" component={DicesAnimation} />
            <Route exact path="/shops/map" component={Location} />
            <Route exact={true} path="/sign-up" component={RegisterUser} />
            <Route exact={true} path="/sign-in" component={LoginUser} />
            <PrivateRoute
              exact={true}
              path="/user/favorites/:id"
              component={Favorites}
            ></PrivateRoute>
            <PrivateRoute
              exact={true}
              path="/user/:id"
              component={User}
            ></PrivateRoute>
            <PrivateRoute
              exact={true}
              path="/admin/add-shop"
              component={ShopForm}
            ></PrivateRoute>
            <PrivateRoute
              exact={true}
              path="/admin/edit-shop/:id"
              component={EditShop}
            ></PrivateRoute>
            <PrivateRoute
              exact={true}
              path="/shops/panel"
              component={ControlPanel}
            ></PrivateRoute>
            <PrivateRoute exact={true} path="/admin/shop-schedule/:id" component={ShopSchedule}>

            </PrivateRoute>

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
