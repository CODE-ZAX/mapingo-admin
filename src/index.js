import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DataProvider from "./context/DataContext";
import UserProvider from "./context/UserContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </DataProvider>
  </React.StrictMode>
);
