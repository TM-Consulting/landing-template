import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Copyright from "./layouts/Copyright";
import { siteData } from "./config/config";
// This is a React Router v5 app
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
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
            <About containers={siteData.pages.about.containers} />
          </Route>
          <Route exact path="/services">
            <Services containers={siteData.pages.services.containers} />
          </Route>
          <Route exact path="/contact">
            <Contact containers={siteData.pages.contact.containers} />
          </Route>

          <Route exact path="/career">
            <Career containers={siteData.pages.career.containers} />
          </Route>
        </Switch>

        <Footer {...siteData.footer} />
        <Copyright {...siteData.copyright} />
      </BrowserRouter>
    </>
  );
}

export default App;
