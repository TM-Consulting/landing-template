import React, { ReactElement } from "react";
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
import { BACKEND_URL } from "./variables";

const routes: any = {
  home: Home,
  about: About,
  services: Services,
  career: Career,
  contact: Contact,
};
const Routes = () => (
  <>
    {siteData.header?.navLinks?.map((item) => {
      let Component = routes[item.url];
      if (item.show)
        return (
          <Route exact path={`/${item.url}`}>
            <Component {...(siteData as any).pages[item.url]} />
          </Route>
        );
      return <></>;
    })}
  </>
);
function App() {
  return (
    <>
      {BACKEND_URL}
      <BrowserRouter>
        <Header {...siteData.header} />

        <Switch>
          <Route exact path="/">
            <Home containers={siteData.pages.home.containers} />
          </Route>
          <Routes />
        </Switch>

        <Footer {...siteData.footer} />
        <Copyright {...siteData.copyright} />
      </BrowserRouter>
    </>
  );
}

export default App;
