import React from "react";
import Header from "./layouts/Header";
// This is a React Router v5 app
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from "./pages/Home"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />

        <Switch>
          <Route exact path="/home">
            <Home/>
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
