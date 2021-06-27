import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ShopDetail } from "./components/ShopDetail";
import { Layout } from "./containers/Layout";
import { ShopContainer } from "./containers/ShopContainer";
import { MenuImage } from "./components/MenuImage";

const App = () => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  //Aqui Cualquier provider

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={ShopContainer} />
        <Route exact={true} path="/detail" component={ShopDetail} />
        <Route exact={true} path="/detail/menu" component={MenuImage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
