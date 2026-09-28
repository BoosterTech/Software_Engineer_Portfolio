import { fireEvent, screen, waitFor } from "@testing-library/react";
import ShareButton from "common/ShareButton";
import { renderWithProviders } from "test-utils";

describe("ShareButton", () => {
  afterEach(() => {
    delete navigator.share;
    delete navigator.clipboard;
    vi.restoreAllMocks();
  });

  it("uses the native share sheet when available", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("no preview"));
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", {
      value: share,
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    await waitFor(() =>
      expect(share).toHaveBeenCalledWith(
        expect.objectContaining({
          title: expect.stringContaining("Dariusz Podczasik"),
          url: expect.stringMatching(/^https?:\/\//),
        })
      )
    );
    expect(screen.getByTestId("share-tooltip")).toHaveTextContent("");
    expect(screen.getByTestId("share-tooltip")).not.toHaveClass("visible");
    delete global.fetch;
  });

  it("attaches the social preview on mobile when file sharing is supported", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      blob: () => Promise.resolve(new Blob(["img"], { type: "image/png" })),
    });
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", {
      value: share,
      configurable: true,
    });
    Object.defineProperty(navigator, "canShare", {
      value: vi.fn().mockReturnValue(true),
      configurable: true,
    });
    // files attach only on mobile — desktop share dialogs mishandle them
    Object.defineProperty(navigator, "userAgentData", {
      value: { mobile: true },
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    await waitFor(() =>
      expect(share).toHaveBeenCalledWith(
        expect.objectContaining({ files: [expect.any(File)] })
      )
    );
    delete navigator.canShare;
    delete navigator.userAgentData;
    delete global.fetch;
  });

  it("shares URL-only on desktop even when file sharing is supported", async () => {
    global.fetch = vi.fn();
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", {
      value: share,
      configurable: true,
    });
    Object.defineProperty(navigator, "canShare", {
      value: vi.fn().mockReturnValue(true),
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    await waitFor(() => expect(share).toHaveBeenCalled());
    expect(share.mock.calls[0][0].files).toBeUndefined();
    expect(global.fetch).not.toHaveBeenCalled();
    delete navigator.canShare;
    delete global.fetch;
  });

  it("ignores share-sheet dismissal (AbortError)", async () => {
    const abort = Object.assign(new Error("dismissed"), {
      name: "AbortError",
    });
    Object.defineProperty(navigator, "share", {
      value: vi.fn().mockRejectedValue(abort),
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    await waitFor(() => expect(navigator.share).toHaveBeenCalled());
    expect(screen.getByTestId("share-tooltip")).toHaveTextContent("");
  });

  it("falls back to clipboard copy with a visible tooltip", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    const tooltip = screen.getByTestId("share-tooltip");
    await waitFor(() => expect(tooltip).toHaveTextContent(/link copied/i));
    expect(tooltip).toHaveClass("visible");
    expect(writeText).toHaveBeenCalledWith(
      expect.stringMatching(/^https?:\/\//)
    );
  });

  it("copies via the legacy execCommand path when the clipboard API is missing", async () => {
    const execCommand = vi.fn().mockReturnValue(true);
    Object.defineProperty(document, "execCommand", {
      value: execCommand,
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    const tooltip = screen.getByTestId("share-tooltip");
    await waitFor(() => expect(tooltip).toHaveTextContent(/link copied/i));
    expect(execCommand).toHaveBeenCalledWith("copy");
    delete document.execCommand;
  });

  it("shows the error tooltip when the legacy copy path fails too", async () => {
    Object.defineProperty(document, "execCommand", {
      value: vi.fn().mockReturnValue(false),
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    const tooltip = screen.getByTestId("share-tooltip");
    await waitFor(() => expect(tooltip).toHaveTextContent(/couldn't copy/i));
    delete document.execCommand;
  });

  it("shows the error tooltip when copying fails", async () => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn().mockRejectedValue(new Error("denied")) },
      configurable: true,
    });
    renderWithProviders(<ShareButton />);

    fireEvent.click(
      screen.getByRole("button", { name: /share this portfolio/i })
    );

    const tooltip = screen.getByTestId("share-tooltip");
    await waitFor(() => expect(tooltip).toHaveTextContent(/couldn't copy/i));
    expect(tooltip).toHaveClass("visible");
  });

  it("renders the localized label in Polish", () => {
    renderWithProviders(<ShareButton />, { initialLanguage: "Polish" });
    expect(
      screen.getByRole("button", { name: /udostępnij to portfolio/i })
    ).toBeInTheDocument();
  });
});
