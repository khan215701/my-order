import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/app.min.css";
import "./assets/css/icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
import router from "./components/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
