import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Helmet } from "react-helmet";

//  Libraries Stylesheet
import "./assets/lib/flaticon/font/flaticon.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/animate/animate.min.css";

// Customized Bootstrap Stylesheet
import "./assets/css/bootstrap.min.css";
//  Libraries Stylesheet
import "./assets/css/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Helmet>
      <script src="./assets/lib/wow/wow.min.js" type="text/javascript" defer></script>
      <script
        src="./assets/lib/easing/easing.min.js"
        type="text/javascript"
        defer
      ></script>
      <script
        src="./assets/lib/waypoints/waypoints.min.js"
        type="text/javascript"
        defer
      ></script>
      <script
        src="./assets/lib/owlcarousel/owl.carousel.min.js"
        type="text/javascript"
        defer
      ></script>

      <script src="js/main.js" defer></script>
    </Helmet>
  </React.StrictMode>
);
