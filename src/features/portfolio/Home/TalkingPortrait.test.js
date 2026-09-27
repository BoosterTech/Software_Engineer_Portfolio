import { fireEvent, screen } from "@testing-library/react";
import Home from "features/portfolio/Home";
import { renderWithProviders } from "test-utils";

describe("TalkingPortrait", () => {
  let playSpy;
  let pauseSpy;

  beforeEach(() => {
    playSpy = jest
      .spyOn(window.HTMLMediaElement.prototype, "play")
      .mockResolvedValue(undefined);
    pauseSpy = jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    playSpy.mockRestore();
    pauseSpy.mockRestore();
  });

  it("defers the video download and plays on tap", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: true,
    });

    const button = screen.getByRole("button", { name: /hear me/i });
    const video = screen.getByTestId("talking-portrait-video");
    expect(video).toHaveAttribute("src");
    // metadata only — the ~1.2 MB MP4 must not download until tap
    expect(video).toHaveAttribute("preload", "metadata");
    expect(video).not.toHaveAttribute("autoplay");
    // still image stays mounted underneath as the flicker guard
    expect(screen.getByAltText(/Portrait of Dariusz/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(playSpy).toHaveBeenCalled();

    fireEvent(video, new Event("playing"));
    expect(
      screen.queryByRole("button", { name: /hear me/i })
    ).not.toBeInTheDocument();

    fireEvent(video, new Event("ended"));
    expect(pauseSpy).toHaveBeenCalled();
    expect(video.currentTime).toBe(0);
    expect(
      screen.getByRole("button", { name: /hear me/i })
    ).toBeInTheDocument();
  });

  it("returns to idle when the video reports an error", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: true,
    });

    const button = screen.getByRole("button", { name: /hear me/i });
    fireEvent.click(button);
    expect(button).toBeDisabled(); // loading until "playing" fires

    fireEvent.error(screen.getByTestId("talking-portrait-video"));
    expect(screen.getByRole("button", { name: /hear me/i })).toHaveAttribute(
      "aria-busy",
      "false"
    );
  });

  it("returns to idle when play() throws synchronously", () => {
    playSpy.mockImplementation(() => {
      throw new Error("play blocked");
    });
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: true,
    });

    fireEvent.click(screen.getByRole("button", { name: /hear me/i }));
    expect(playSpy).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /hear me/i })).toHaveAttribute(
      "aria-busy",
      "false"
    );
  });

  it("renders the video with a localized button in Polish", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "Polish",
      initialIsDark: true,
    });

    expect(
      screen.getByRole("button", { name: /posłuchaj/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("talking-portrait-video")).toBeInTheDocument();
    expect(
      screen.getByAltText(/Portret Dariusza|Portrait/i)
    ).toBeInTheDocument();
  });

  it("renders in light theme too", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: false,
    });

    expect(
      screen.getByRole("button", { name: /hear me/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("talking-portrait-video")).toBeInTheDocument();
    expect(screen.getByAltText(/Portrait of Dariusz/i)).toBeInTheDocument();
  });
});
