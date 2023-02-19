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
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />

        <Switch>
          <Route exact path="/home">
            <h1>Home</h1>
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
