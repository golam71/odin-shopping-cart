import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RootErrorBoundary from "../src/misc/RootErrorBoundary.jsx";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useRouteError: vi.fn(),
    isRouteErrorResponse: vi.fn(),
  };
});

import { useRouteError, isRouteErrorResponse } from "react-router";

afterEach(cleanup);

describe("RootErrorBoundary", () => {
  it("renders route error response with status and statusText", () => {
    vi.mocked(useRouteError).mockReturnValue({
      status: 404,
      statusText: "Not Found",
      data: "Page does not exist",
    });
    vi.mocked(isRouteErrorResponse).mockReturnValue(true);

    render(
      <MemoryRouter>
        <RootErrorBoundary />
      </MemoryRouter>,
    );

    expect(screen.getByText("404 Not Found")).toBeInTheDocument();
    expect(screen.getByText("Page does not exist")).toBeInTheDocument();
  });

  it("renders Error instance with message and stack", () => {
    const error = new Error("Something broke");
    error.stack = "at line 1\nat line 2";
    vi.mocked(useRouteError).mockReturnValue(error);
    vi.mocked(isRouteErrorResponse).mockReturnValue(false);

    render(
      <MemoryRouter>
        <RootErrorBoundary />
      </MemoryRouter>,
    );

    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("Something broke")).toBeInTheDocument();
    expect(screen.getByText("The stack trace is:")).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes("at line 1"))).toBeInTheDocument();
  });

  it("renders Unknown Error for other error types", () => {
    vi.mocked(useRouteError).mockReturnValue("some string");
    vi.mocked(isRouteErrorResponse).mockReturnValue(false);

    render(
      <MemoryRouter>
        <RootErrorBoundary />
      </MemoryRouter>,
    );

    expect(screen.getByText("Unknown Error")).toBeInTheDocument();
  });
});
