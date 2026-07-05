import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navbar from "../src/layout/Navbar.jsx";

afterEach(cleanup);

describe("Navbar", () => {
  it("shows count badge when items have count > 0", () => {
    const storeData = [
      { id: 1, count: 3 },
      { id: 2, count: 0 },
      { id: 3, count: 2 },
    ];

    render(
      <MemoryRouter>
        <Navbar storeData={storeData} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Cart (5)")).toBeInTheDocument();
  });

  it("shows Cart without badge when all counts are 0", () => {
    const storeData = [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
    ];

    render(
      <MemoryRouter>
        <Navbar storeData={storeData} />
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole("link", { name: /^Cart/ });
    expect(cartLink.textContent).toBe("Cart  ");
  });

  it("shows Cart without badge when storeData is empty", () => {
    render(
      <MemoryRouter>
        <Navbar storeData={[]} />
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole("link", { name: /^Cart/ });
    expect(cartLink.textContent).toBe("Cart  ");
  });
});
