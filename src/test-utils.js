import { render } from "@testing-library/react";
import { LanguageProvider } from "common/LanguageProvider";
import { ThemeModeProvider } from "common/ThemeModeProvider";
import { ThemeProvider } from "styled-components";
import { themes } from "themes";

const AllProviders = ({ children, initialLanguage, initialIsDark }) => (
  <LanguageProvider initialLanguage={initialLanguage}>
    <ThemeModeProvider initialIsDark={initialIsDark}>
      <ThemeProvider theme={themes}>{children}</ThemeProvider>
    </ThemeModeProvider>
  </LanguageProvider>
);

export const renderWithProviders = (
  component,
  { initialLanguage, initialIsDark, ...options } = {}
) =>
  render(component, {
    wrapper: ({ children }) => (
      <AllProviders
        initialLanguage={initialLanguage}
        initialIsDark={initialIsDark}
      >
        {children}
      </AllProviders>
    ),
    ...options,
  });
