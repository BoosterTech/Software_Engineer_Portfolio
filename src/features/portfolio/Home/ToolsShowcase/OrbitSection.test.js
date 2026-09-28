import { fireEvent, screen, waitFor } from "@testing-library/react";
import { OrbitSection } from "features/portfolio/Home/ToolsShowcase/OrbitSection";
import { renderWithProviders } from "test-utils";

const setWidth = (value) =>
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value,
  });

const technologies = [
  {
    id: "react",
    name: "React",
    icon: "react.svg",
    iconWidth: 600,
    iconHeight: 180,
  },
  {
    id: "framework",
    name: "Framework",
    icon: <svg data-testid="component-icon" />,
    iconWidth: 10,
    iconHeight: 10,
  },
  {
    name: "Labelled",
    icon: "labelled.png",
    iconWidth: 5,
    iconHeight: 5,
    showLabel: true,
  },
];

const renderOrbit = () =>
  renderWithProviders(
    <OrbitSection
      technologies={technologies}
      centerIcon="center.webp"
      centerIconWidth={160}
      centerIconHeight={97}
      centerLabel="Next.js"
    />
  );

describe("OrbitSection", () => {
  const originalWidth = window.innerWidth;

  beforeEach(() => setWidth(1024));
  afterEach(() => setWidth(originalWidth));

  it("renders the desktop orbit above the mobile breakpoint", () => {
    renderOrbit();

    expect(screen.getByAltText("Next.js")).toBeInTheDocument();
    expect(screen.getByAltText("React")).toBeInTheDocument();
    expect(screen.getByAltText("Labelled")).toBeInTheDocument();
    expect(screen.getByTestId("component-icon")).toBeInTheDocument();
    expect(screen.getByText("Labelled")).toBeInTheDocument();
  });

  it("renders the marquee with two copies below the breakpoint", () => {
    setWidth(500);
    renderOrbit();

    expect(screen.getAllByAltText("React")).toHaveLength(2);
    expect(screen.getAllByTestId("component-icon")).toHaveLength(2);
    expect(screen.queryByAltText("Next.js")).not.toBeInTheDocument();
  });

  it("uses the compact orbit dimensions under 1024px", () => {
    setWidth(800);
    renderOrbit();

    expect(screen.getByAltText("Next.js")).toBeInTheDocument();
    expect(screen.getAllByAltText("React")).toHaveLength(1);
  });

  it("pauses the marquee on tap and resumes on outside pointerdown", () => {
    vi.useFakeTimers();
    setWidth(500);
    renderOrbit();

    const card = screen.getAllByAltText("React")[0];

    fireEvent.click(card);
    fireEvent.pointerDown(card);
    fireEvent.pointerDown(document.body);
    fireEvent.click(card);
    fireEvent.click(card);

    vi.advanceTimersByTime(4000);
    vi.useRealTimers();
  });

  it("updates when the window is resized across the breakpoint", async () => {
    renderOrbit();

    expect(screen.getAllByAltText("React")).toHaveLength(1);

    setWidth(500);
    fireEvent(window, new Event("resize"));
    fireEvent(window, new Event("resize"));

    await waitFor(() =>
      expect(screen.getAllByAltText("React")).toHaveLength(2)
    );

    setWidth(1024);
    fireEvent(window, new Event("resize"));

    await waitFor(() =>
      expect(screen.getAllByAltText("React")).toHaveLength(1)
    );
  });
});
