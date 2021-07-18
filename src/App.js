import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import NotFound from "./containers/NotFound";
import { UserContextProvider } from "./context/userContext";
import { lazy } from "react";
// import { HeroContainer } from "./containers/HeroContainer";
// import { ShopDetail } from "./components/ShopDetail";
// import { ShopContainer } from "./containers/ShopContainer";
// import { ShopForm } from "./components/ShopForm";
// import { RegisterUser } from "./components/RegisterUser";
// import { LoginUser } from "./components/LoginUser";
// import { User } from "./components/User";
// import { Favorites } from "./containers/Favorites";
// import { ShopReview } from "./components/ShopReview";

const HeroContainer = lazy(() => import("./containers/HeroContainer"));
const ShopDetail = lazy(() => import("./components/ShopDetail"));
const ShopContainer = lazy(() => import("./containers/ShopContainer"));
const ShopForm = lazy(() => import("./components/ShopForm"));
const RegisterUser = lazy(() => import("./components/RegisterUser"));
const LoginUser = lazy(() => import("./components/LoginUser"));
const User = lazy(() => import("./components/User"));
const Favorites = lazy(() => import("./containers/Favorites"));
const ShopReview = lazy(() => import("./components/ShopReview"));

const App = () => (
  //Aqui Cualquier provider

  <BrowserRouter>
    <UserContextProvider>
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={HeroContainer} />
          <Route exact={true} path="/shops" component={ShopContainer} />
          <Route exact={true} path="/shops/review/:id" component={ShopReview} />
          <Route exact={true} path="/shops/detail/:id" component={ShopDetail} />
          <Route exact={true} path="/sign-up" component={RegisterUser} />
          <Route exact={true} path="/sign-in" component={LoginUser} />
          <Route exact={true} path="/user/favorites" component={Favorites} />
          <Route exact={true} path="/user/:id" component={User} />
          <Route exact path="/admin/add-shop" component={ShopForm} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </UserContextProvider>
  </BrowserRouter>
);

export default App;
