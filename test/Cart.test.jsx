import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Cart from "../src/cart/Cart.jsx";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import { useOutletContext } from "react-router";

afterEach(cleanup);

describe("Cart", () => {
  it("shows empty message when no items have count != 0", () => {
    vi.mocked(useOutletContext).mockReturnValue({
      storeData: [
        { id: 1, name: "Item 1", price: 10, count: 0 },
        { id: 2, name: "Item 2", price: 20, count: 0 },
      ],
      setStoreData: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Buy some.*items first/)).toBeInTheDocument();
  });

  it("renders item cards when items have count != 0", () => {
    vi.mocked(useOutletContext).mockReturnValue({
      storeData: [
        { id: 1, name: "Keyboard", price: 99.99, image: "/keyboard.png", shortDescription: "A keyboard", count: 2 },
        { id: 2, name: "Mouse", price: 39.99, image: "/mouse.png", shortDescription: "A mouse", count: 0 },
      ],
      setStoreData: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText("Keyboard")).toBeInTheDocument();
    expect(screen.queryByText("Mouse")).not.toBeInTheDocument();
  });

  it("displays correct price Math.floor(price * count * 100) / 100", () => {
    vi.mocked(useOutletContext).mockReturnValue({
      storeData: [
        { id: 1, name: "Item", price: 19.99, image: "/img.png", shortDescription: "desc", count: 3 },
      ],
      setStoreData: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText("59.97$")).toBeInTheDocument();
  });
});
