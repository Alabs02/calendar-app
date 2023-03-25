import React, { useEffect } from "react";

// UTILS
import { changeTheme } from './utils/controller';

// ENUMS
import { EThemes } from './enums';

// ROUTES
import Routes from "./routes";

function Main() {
  const hasTheme = !!document.documentElement.classList.length;

  useEffect(() => {
    if (!hasTheme) changeTheme(EThemes.LIGHT);
  }, []);
  
  return <Routes />;
}

export default Main;
