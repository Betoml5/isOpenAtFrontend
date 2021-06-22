import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HeaderBottom } from "./components/HeaderBottom";
import { ShopDetail } from "./components/ShopDetail";
import { Layout } from "./containers/Layout";
import { ShopContainer } from "./containers/ShopContainer";

const App = () => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  //Aqui Cualquier provider

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={ShopContainer} />
        <Route exact={true} path="/detail" component={ShopDetail} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
