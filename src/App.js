import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./containers/Layout";
import { HeroContainer } from "./containers/HeroContainer";
import { ShopDetail } from "./components/ShopDetail";
import { ShopContainer } from "./containers/ShopContainer";
import { NotFound } from "./containers/NotFound";
import { ShopForm } from "./components/ShopForm";
import { UserContextProvider } from "./context/userContext";
import { RegisterUser } from "./components/RegisterUser";
import { LoginUser } from "./components/LoginUser";
import { User } from "./components/User";
import { Favorites } from "./containers/Favorites";
import { ShopReview } from "./components/ShopReview";
import { initAxiosInterceptors } from "./services/auth-helpers";
// Obtenemos el bearer token.
initAxiosInterceptors();
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
