import React, { useEffect } from "react";

// ENUMS
import { EThemes } from "./enums";

// ROUTES
import Routes from "./routes";

// UTILS
import { changeTheme } from "./utils/controller";

function Main() {
  const hasTheme = !!document.documentElement.classList.length;

  useEffect(() => {
    if (!hasTheme) changeTheme(EThemes.LIGHT);
  }, [hasTheme]);

  return <Routes />;
}

export default Main;
