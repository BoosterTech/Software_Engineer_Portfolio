import { act, fireEvent, screen, within } from "@testing-library/react";
import Navigation from "common/Navigation";
import { menuItems } from "common/Navigation/menuItems";
import { renderWithProviders } from "test-utils";

const desktopMenu = () => within(screen.getByTestId("desktop-menu"));
const mobileMenu = () => within(screen.getByTestId("mobile-menu"));

const mockMatchMedia = (matches) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe("Navigation", () => {
  it("renders English menu items by default", () => {
    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(desktopMenu().getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Polish menu items with Polish initial language", () => {
    renderWithProviders(<Navigation />, { initialLanguage: "Polish" });

    for (const item of menuItems.Polish) {
      expect(desktopMenu().getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Spanish menu items with Spanish initial language", () => {
    renderWithProviders(<Navigation />, { initialLanguage: "Spanish" });

    for (const item of menuItems.Spanish) {
      expect(desktopMenu().getByText(item.name)).toBeInTheDocument();
    }
  });

  it("highlights the section intersecting the spy band", () => {
    const OriginalObserver = global.IntersectionObserver;
    let observerCallback;
    global.IntersectionObserver = class {
      constructor(callback) {
        observerCallback = callback;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    try {
      renderWithProviders(
        <>
          <Navigation />
          <div id="about" />
        </>
      );

      act(() => {
        observerCallback([{ target: { id: "about" }, isIntersecting: true }]);
      });

      expect(desktopMenu().getByTestId("nav-link-about")).toHaveClass("active");
      expect(desktopMenu().getByTestId("nav-link-contact")).not.toHaveClass(
        "active"
      );
    } finally {
      global.IntersectionObserver = OriginalObserver;
    }
  });

  it("closes the mobile menu on Escape and returns focus to the toggle", () => {
    renderWithProviders(<Navigation />);

    const toggle = screen.getByLabelText("Toggle navigation menu");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(window, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("renders icons instead of text in compact mode", () => {
    mockMatchMedia(true);
    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(desktopMenu().queryByText(item.name)).not.toBeInTheDocument();
      expect(mobileMenu().getByText(item.name)).toBeInTheDocument();
    }
  });
});
