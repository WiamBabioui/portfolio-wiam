import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./App/Layouts/Header/Header";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index={true} element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
