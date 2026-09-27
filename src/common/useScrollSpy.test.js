import { act, render, screen } from "@testing-library/react";
import { useScrollSpy } from "common/useScrollSpy";

const IDS = ["home", "about", "contact"];

const Harness = () => {
  const activeId = useScrollSpy(IDS);
  return (
    <>
      {IDS.map((id) => (
        <div key={id} id={id} />
      ))}
      <div data-testid="active">{activeId}</div>
    </>
  );
};

const active = () => screen.getByTestId("active").textContent;

const mockPage = ({ scrollY = 0, scrollHeight = 5000, innerHeight = 800 } = {}) => {
  Object.defineProperty(window, "scrollY", { value: scrollY, configurable: true });
  Object.defineProperty(window, "innerHeight", { value: innerHeight, configurable: true });
  Object.defineProperty(document.documentElement, "scrollHeight", {
    value: scrollHeight,
    configurable: true,
  });
};

describe("useScrollSpy", () => {
  let observerCallback;
  let OriginalObserver;

  beforeEach(() => {
    OriginalObserver = global.IntersectionObserver;
    global.IntersectionObserver = class {
      constructor(callback) {
        observerCallback = callback;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };
    mockPage();
  });

  afterEach(() => {
    global.IntersectionObserver = OriginalObserver;
    document.body.style.position = "";
    window.scrollTo.mockClear?.();
  });

  const intersect = (id) =>
    act(() =>
      observerCallback([{ target: { id }, isIntersecting: true }])
    );

  const scroll = () =>
    act(() => window.dispatchEvent(new Event("scroll")));

  it("activates the section that enters the spy band", () => {
    render(<Harness />);

    intersect("about");
    expect(active()).toBe("about");
  });

  it("forces the last section active once the page bottom is reached", () => {
    render(<Harness />);

    intersect("about");
    mockPage({ scrollY: 4200 }); // 4200 + 800 >= 5000 - 2
    scroll();
    expect(active()).toBe("contact");
  });

  it("ignores bottom forcing while the body is scroll-locked", () => {
    render(<Harness />);

    intersect("about");
    document.body.style.position = "fixed"; // modal scroll-lock
    mockPage({ scrollY: 4200 });
    scroll();
    expect(active()).toBe("about");
  });
});
