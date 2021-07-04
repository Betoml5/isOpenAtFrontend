import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./containers/Layout";
import { ShopContainer } from "./containers/ShopContainer";
import { HeroContainer } from "./containers/HeroContainer";

const App = () => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  //Aqui Cualquier provider

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={HeroContainer} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
