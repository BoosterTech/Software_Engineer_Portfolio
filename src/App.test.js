import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "common/LanguageProvider";
import { ThemeModeProvider } from "common/ThemeModeProvider";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { themes } from "./themes";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

const renderWithProviders = (component) => {
  return render(
    <LanguageProvider>
      <ThemeModeProvider>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          {component}
        </ThemeProvider>
      </ThemeModeProvider>
    </LanguageProvider>
  );
};

test("renders the welcome label without crashing", () => {
  renderWithProviders(<App />);
  const welcomeLabel = screen.getByText(/welcome to my portfolio/i);
  expect(welcomeLabel).toBeInTheDocument();
});
