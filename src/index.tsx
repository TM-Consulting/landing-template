import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//  Libraries Stylesheet
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/animate/animate.min.css";
import "./assets/lib/flaticon/font/flaticon.css";

//  Libraries Stylesheet
import "./assets/css/style.css";

// Customized Bootstrap Stylesheet

import "./assets/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
