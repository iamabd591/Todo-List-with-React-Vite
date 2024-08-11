import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
