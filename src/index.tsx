import React from "react";
import ReactDOM from "react-dom";

// MAIN
import Main from "./Main";

import reportWebVitals from "./reportWebVitals";

// GLOBAL STYLES
import "./sass/app.scss";
import "./sass/global.scss";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    {/* <ReduxProvider store={getStore(reducers)}> */}
    <Main />
    {/* </ReduxProvider> */}
  </React.StrictMode>,
  root
);

reportWebVitals();
