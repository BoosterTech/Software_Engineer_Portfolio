import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import projects from "content/projects";
import Projects from "features/portfolio/Projects";
import { renderWithProviders } from "test-utils";

const dot = (index) =>
  screen.getByRole("button", { name: `Go to project ${index + 1}` });

const activeDotIndex = () =>
  projects.findIndex((_, i) => dot(i).getAttribute("aria-current") === "true");

describe("Projects", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    window.HTMLElement.prototype.scrollTo = vi.fn();
  });

  it("renders the section header and every project slide", () => {
    renderWithProviders(<Projects id="projects" />);

    expect(
      screen.getByRole("region", { name: "Projects carousel" })
    ).toBeInTheDocument();
    expect(screen.getAllByAltText(/project screenshot$/).length).toBe(
      projects.length
    );
  });

  it("starts on the second project and exposes nav dots", () => {
    renderWithProviders(<Projects id="projects" />);

    expect(activeDotIndex()).toBe(1);
    expect(dot(1)).toHaveAttribute("aria-current", "true");
    expect(dot(0)).not.toHaveAttribute("aria-current");
  });

  it("selects a project when its dot is clicked", () => {
    renderWithProviders(<Projects id="projects" />);

    fireEvent.click(dot(3));
    expect(activeDotIndex()).toBe(3);
  });

  it("moves with the arrow buttons and hides them at the bounds", () => {
    renderWithProviders(<Projects id="projects" />);

    const prev = () =>
      screen.queryByRole("button", { name: "Previous project" });
    const next = () => screen.queryByRole("button", { name: "Next project" });

    expect(prev()).toBeInTheDocument();
    expect(next()).toBeInTheDocument();

    fireEvent.click(prev());
    expect(activeDotIndex()).toBe(0);
    expect(prev()).not.toBeInTheDocument();

    fireEvent.click(dot(projects.length - 1));
    expect(next()).not.toBeInTheDocument();
  });

  it("responds to ArrowLeft/ArrowRight when focus is inside the carousel", () => {
    renderWithProviders(<Projects id="projects" />);
    const region = screen.getByRole("region");

    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(activeDotIndex()).toBe(2);

    fireEvent.keyDown(region, { key: "ArrowLeft" });
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(activeDotIndex()).toBe(0);

    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(activeDotIndex()).toBe(0);
  });

  it("ignores arrow keys fired outside the carousel region", () => {
    renderWithProviders(<Projects id="projects" />);

    fireEvent.keyDown(document.body, { key: "ArrowRight" });
    expect(activeDotIndex()).toBe(1);
  });

  it("selects a slide when an inactive slide is clicked", () => {
    renderWithProviders(<Projects id="projects" />);

    const inactiveImage = screen.getByAltText(
      `${projects[0].title.English} — project screenshot`
    );
    fireEvent.click(inactiveImage);
    expect(activeDotIndex()).toBe(0);
  });

  it("opens the modal from the active slide expand button", () => {
    renderWithProviders(<Projects id="projects" />);

    fireEvent.click(
      screen.getByRole("button", {
        name: `Expand ${projects[1].title.English}`,
      })
    );

    expect(
      screen.getByRole("dialog", { name: projects[1].title.English })
    ).toBeInTheDocument();
  });

  it("navigates between projects inside the modal", () => {
    renderWithProviders(<Projects id="projects" />);

    fireEvent.click(
      screen.getByRole("button", {
        name: `Expand ${projects[1].title.English}`,
      })
    );
    const dialog = screen.getByRole("dialog");
    fireEvent.click(
      within(dialog).getByRole("button", { name: "Next project" })
    );

    expect(
      screen.getByRole("dialog", { name: projects[2].title.English })
    ).toBeInTheDocument();
  });

  it("closes the modal via the close button", async () => {
    renderWithProviders(<Projects id="projects" />);

    fireEvent.click(
      screen.getByRole("button", {
        name: `Expand ${projects[1].title.English}`,
      })
    );
    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });
});
