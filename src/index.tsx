import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

// TOAST CONFIG
import { MaterialToastContainer } from '@/components/core';

// MAIN
import Main from "@/Main";

import reportWebVitals from "@/reportWebVitals";

// GLOBAL STYLES
import 'bulma/css/bulma.min.css';
import "@/sass/global.scss";
import 'nprogress/nprogress.css';
import 'animate.css/animate.min.css';
import 'material-react-toastify/dist/ReactToastify.css';

const root = document.getElementById("root");

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Main />
        <MaterialToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>,
  root,
);

reportWebVitals();
