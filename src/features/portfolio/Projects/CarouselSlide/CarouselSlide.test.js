import { fireEvent, screen } from "@testing-library/react";
import CarouselSlide from "features/portfolio/Projects/CarouselSlide";
import { renderWithProviders } from "test-utils";

describe("CarouselSlide", () => {
  const baseProject = {
    title: {
      English: "Test Project",
      Polish: "Test Project",
      Spanish: "Test Project",
    },
    imageURL: "test-image.png",
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

  it("renders project image and title", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(
      screen.getByAltText("Test Project — project screenshot")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Expand Test Project" })
    ).toBeInTheDocument();
  });

  it("does not render technology badges (stack lives in the modal)", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(screen.queryByText("React")).not.toBeInTheDocument();
    expect(screen.queryByText("CSS")).not.toBeInTheDocument();
  });

  it("renders CTA links with correct hrefs", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(screen.getByRole("link", { name: "Live Demo" })).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/example/repo"
    );
  });

  it("renders coming soon badge when variant is set", () => {
    renderWithProviders(
      <CarouselSlide
        project={{ ...baseProject, variant: "comingSoon" }}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Coming soon")).toBeInTheDocument();
  });

  it("calls onExpand when active slide is clicked", () => {
    const onExpand = vi.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
        onExpand={onExpand}
      />
    );

    fireEvent.click(screen.getByAltText("Test Project — project screenshot"));
    expect(onExpand).toHaveBeenCalledTimes(1);
  });

  it("calls onClick when inactive slide is clicked", () => {
    const onClick = vi.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={false}
        position="left"
        onClick={onClick}
        onExpand={() => {}}
      />
    );

    fireEvent.click(screen.getByAltText("Test Project — project screenshot"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls onExpand when the details button is activated", () => {
    const onExpand = vi.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
        onExpand={onExpand}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Expand Test Project" })
    );
    expect(onExpand).toHaveBeenCalledTimes(1);
  });

  it("does not render a details button on inactive slides", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={false}
        position="left"
        onClick={() => {}}
        onExpand={() => {}}
      />
    );

    expect(
      screen.queryByRole("button", { name: "Expand Test Project" })
    ).not.toBeInTheDocument();
  });

  it("exposes the slide as a labelled group", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={false}
        position="left"
        onClick={() => {}}
        onExpand={() => {}}
      />
    );

    expect(
      screen.getByRole("group", { name: "Test Project" })
    ).toBeInTheDocument();
  });

  it("keeps CTA links out of the tab order on inactive slides", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={false}
        position="left"
        onClick={() => {}}
        onExpand={() => {}}
      />
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
