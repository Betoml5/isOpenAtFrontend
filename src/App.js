import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./containers/Layout";
import { HeroContainer } from "./containers/HeroContainer";
import { ShopDetail } from "./components/ShopDetail";
import { ShopContainer } from "./containers/ShopContainer";
import { NotFound } from "./containers/NotFound";
import { ShopForm } from "./components/ShopForm";
import { UserContextProvider } from "./context/userContext";

const App = () => (
  //Aqui Cualquier provider

  <BrowserRouter>
    <UserContextProvider>
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={HeroContainer} />
          <Route exact={true} path="/shops" component={ShopContainer} />
          <Route exact path="/detail/:id" component={ShopDetail} />
          <Route exact path="/form" component={ShopForm} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </UserContextProvider>
  </BrowserRouter>
);

export default App;
