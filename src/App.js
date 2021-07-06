import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./containers/Layout";
import { HeroContainer } from "./containers/HeroContainer";
import { ShopDetail } from "./components/ShopDetail";

const App = () => (
  //Aqui Cualquier provider

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={HeroContainer} />
        <Route exact path="/detail" component={ShopDetail} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
