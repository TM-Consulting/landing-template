import React from "react";
import Header from "./layouts/Header";
import { siteData } from "./config/config";
// This is a React Router v5 app
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header {...siteData.header} />

        <Switch>
          <Route exact path="/">
            <Home containers={siteData.pages.home.containers} />
          </Route>
          <Route exact path="/home">
            <Home containers={siteData.pages.home.containers} />
          </Route>
          <Route exact path="/about">
            <h1>about</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
