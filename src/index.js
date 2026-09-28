import { domMax, LazyMotion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { LanguageProvider } from "./common/LanguageProvider";
import { ThemeModeProvider } from "./common/ThemeModeProvider";
import { GlobalStyles } from "./GlobalStyles";
import { themes } from "./themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeModeProvider>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          {/* Static domMax: the lib is statically imported app-wide anyway,
              so an async features() thunk splits nothing (rolldown warns
              INEFFECTIVE_DYNAMIC_IMPORT). `strict` turns the m.*-only
              convention into a dev-time error instead of a silent regression. */}
          <LazyMotion features={domMax} strict>
            <App />
          </LazyMotion>
        </ThemeProvider>
      </ThemeModeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
