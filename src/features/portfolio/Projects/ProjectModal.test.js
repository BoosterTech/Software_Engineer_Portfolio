import { fireEvent, screen } from "@testing-library/react";
import ProjectModal from "features/portfolio/Projects/ProjectModal";
import { renderWithProviders } from "test-utils";

const baseProject = {
  title: {
    English: "Test Project",
    Polish: "Test Project",
    Spanish: "Test Project",
  },
  description: {
    English: "<p>Modal description</p>",
    Polish: "<p>Modal description</p>",
    Spanish: "<p>Modal description</p>",
  },
  imageURL: "card-image.webp",
  modalImageURL: "modal-image.webp",
  modalImageWidth: 1600,
  modalImageHeight: 900,
  GitHubPagesURL: "https://example.com",
  GitHubRepoURL: "https://github.com/example/repo",
  GitHubPagesURLTag: {
    English: "Live Demo",
    Polish: "Live Demo",
    Spanish: "Live Demo",
  },
  GitHubRepoURLTag: {
    English: "GitHub",
    Polish: "GitHub",
    Spanish: "GitHub",
  },
  technologies: ["React", "CSS"],
};

const renderModal = (props = {}) =>
  renderWithProviders(
    <ProjectModal
      project={baseProject}
      onClose={vi.fn()}
      onPrev={vi.fn()}
      onNext={vi.fn()}
      hasPrev={true}
      hasNext={true}
      {...props}
    />
  );

describe("ProjectModal", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    window.HTMLElement.prototype.scrollTo = vi.fn();
  });

  it("renders nothing without a project", () => {
    renderModal({ project: null });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders a labelled dialog with title, description, and badges", () => {
    renderModal();

    const dialog = screen.getByRole("dialog", { name: "Test Project" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute(
      "aria-describedby",
      "project-modal-description"
    );
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Modal description")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  it("renders the modal image with its own dimensions", () => {
    renderModal();

    const image = screen.getByAltText("Test Project — project screenshot");
    expect(image).toHaveAttribute("src", "modal-image.webp");
    expect(image).toHaveAttribute("width", "1600");
    expect(image).toHaveAttribute("height", "900");
  });

  it("falls back to the card image and shared dimensions", () => {
    const { modalImageURL, modalImageWidth, modalImageHeight, ...rest } =
      baseProject;
    renderModal({ project: rest });

    const image = screen.getByAltText("Test Project — project screenshot");
    expect(image).toHaveAttribute("src", "card-image.webp");
    expect(image).toHaveAttribute("width", "1200");
    expect(image).toHaveAttribute("height", "675");
  });

  it("renders CTA links with hrefs and safe rel", () => {
    renderModal();

    expect(screen.getByRole("link", { name: "Live Demo" })).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/example/repo"
    );
    expect(screen.getByRole("link", { name: "Live Demo" })).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });

  it("renders the coming soon badge for the comingSoon variant", () => {
    renderModal({ project: { ...baseProject, variant: "comingSoon" } });
    expect(screen.getByText("Coming soon")).toBeInTheDocument();
  });

  it("focuses the close button on mount", () => {
    renderModal();
    expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
  });

  it("locks body scroll while open and restores it on unmount", () => {
    const { unmount } = renderModal();

    expect(document.body).toHaveStyle("position: fixed");

    unmount();
    expect(document.body).not.toHaveStyle("position: fixed");
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("restores focus to the trigger element on unmount", () => {
    const trigger = document.createElement("button");
    trigger.textContent = "Open";
    document.body.appendChild(trigger);
    trigger.focus();

    const { unmount } = renderModal();
    unmount();

    expect(trigger).toHaveFocus();
    document.body.removeChild(trigger);
  });

  it("calls onClose on Escape", () => {
    const onClose = vi.fn();
    renderModal({ onClose });

    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("navigates with ArrowLeft/ArrowRight when available", () => {
    const onPrev = vi.fn();
    const onNext = vi.fn();
    renderModal({ onPrev, onNext });

    const dialog = screen.getByRole("dialog");
    fireEvent.keyDown(dialog, { key: "ArrowLeft" });
    fireEvent.keyDown(dialog, { key: "ArrowRight" });

    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("ignores arrow keys when navigation is unavailable", () => {
    const onPrev = vi.fn();
    const onNext = vi.fn();
    renderModal({ onPrev, onNext, hasPrev: false, hasNext: false });

    const dialog = screen.getByRole("dialog");
    fireEvent.keyDown(dialog, { key: "ArrowLeft" });
    fireEvent.keyDown(dialog, { key: "ArrowRight" });

    expect(onPrev).not.toHaveBeenCalled();
    expect(onNext).not.toHaveBeenCalled();
  });

  it("hides nav buttons at the bounds", () => {
    renderModal({ hasPrev: false, hasNext: false });

    expect(
      screen.queryByRole("button", { name: "Previous project" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Next project" })
    ).not.toBeInTheDocument();
  });

  it("calls onPrev/onNext from the nav buttons", () => {
    const onPrev = vi.fn();
    const onNext = vi.fn();
    renderModal({ onPrev, onNext });

    fireEvent.click(screen.getByRole("button", { name: "Previous project" }));
    fireEvent.click(screen.getByRole("button", { name: "Next project" }));

    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on backdrop click but not when clicking inside", () => {
    const onClose = vi.fn();
    renderModal({ onClose });

    fireEvent.click(screen.getByRole("dialog"));
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("project-modal-backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("traps Tab inside the dialog", () => {
    renderModal();

    const closeButton = screen.getByRole("button", { name: "Close" });
    const lastLink = screen.getByRole("link", { name: "GitHub" });

    lastLink.focus();
    fireEvent.keyDown(lastLink, { key: "Tab" });
    expect(closeButton).toHaveFocus();
  });

  it("traps Shift+Tab from the first element back to the last", () => {
    renderModal();

    const closeButton = screen.getByRole("button", { name: "Close" });
    closeButton.focus();

    fireEvent.keyDown(closeButton, { key: "Tab", shiftKey: true });
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveFocus();
  });

  it("moves focus into the dialog when Tab is pressed outside it", () => {
    renderModal();

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    outside.focus();

    fireEvent.keyDown(outside, { key: "Tab" });
    expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();

    document.body.removeChild(outside);
  });

  it("closes via the close button", () => {
    const onClose = vi.fn();
    renderModal({ onClose });

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
