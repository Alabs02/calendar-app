import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

// MAIN
import Main from "@/Main";

import reportWebVitals from "@/reportWebVitals";

// BULMA STYLES
import 'bulma/css/bulma.min.css';

// ANIMATE.CSS
import 'animate.css/animate.min.css';

// GLOBAL STYLES
import "@/sass/global.scss";

const root = document.getElementById("root");

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  </StrictMode>,
  root,
);

reportWebVitals();
