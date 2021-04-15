import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import Photoreducer from "./features/photo/photoSlice";
import Themereducer from "./theme/themeSlice";
import User from "./user/userSlice";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";

//store
const store = configureStore({
  reducer: {
    photo: Photoreducer,
    theme:Themereducer,
    user:User
  },
});
ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
