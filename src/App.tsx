import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer"
import Copyright from "./layouts/Copyright"
import { siteData } from "./config/config";
// This is a React Router v5 app
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header {...siteData.header} />

        <Switch>
          <Route exact path="/">
            <Home containers={siteData.pages.home.containers} />
          </Route>
          <Route exact path="/Home">
            <Home containers={siteData.pages.home.containers} />
          </Route>
          <Route exact path="/Contact">
            <Home containers={siteData.pages.contact.containers} />
          </Route>
          <Route exact path="/About">
          </Route>
        </Switch>

        <Footer {...siteData.footer} />
        <Copyright {...siteData.copyright} />
      </BrowserRouter>
    </>
  );
}

export default App;
