import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AppFieldProvider from "./Context/useAppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppFieldProvider>
        <App />
      </AppFieldProvider>
    </BrowserRouter>
  </React.StrictMode>
);
