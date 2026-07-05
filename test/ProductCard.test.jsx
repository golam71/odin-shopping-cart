import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProductCard from "../src/products/ProductCard.jsx";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import { useOutletContext } from "react-router";

afterEach(cleanup);

function renderCard(overrides = {}) {
  const defaultProps = {
    id: 1,
    name: "Test Product",
    shortDescription: "A great product",
    price: 49.99,
    image: "/test.png",
    count: 0,
  };

  const storeData = [
    { id: 1, name: "Test Product", shortDescription: "A great product", price: 49.99, image: "/test.png", count: overrides.count ?? 0 },
  ];
  const setStoreData = vi.fn();

  vi.mocked(useOutletContext).mockReturnValue({ storeData, setStoreData });

  const utils = render(
    <MemoryRouter>
      <ProductCard {...defaultProps} {...overrides} />
    </MemoryRouter>,
  );

  return { ...utils, setStoreData, storeData };
}

describe("ProductCard", () => {
  it("renders product name, description, price, and image", () => {
    renderCard({ count: 0 });

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("A great product")).toBeInTheDocument();
    expect(screen.getByText("49.99$")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/test.png");
  });

  it("shows price * count when count > 0", () => {
    renderCard({ count: 3 });

    expect(screen.getByText("149.97$")).toBeInTheDocument();
  });

  it('calls setStoreData with incremented count on "+" click', () => {
    const { setStoreData } = renderCard({ count: 2 });

    fireEvent.click(screen.getAllByText("+")[0]);

    expect(setStoreData).toHaveBeenCalledTimes(1);
    const arg = setStoreData.mock.calls[0][0];
    expect(arg).toEqual([
      { id: 1, name: "Test Product", shortDescription: "A great product", price: 49.99, image: "/test.png", count: 3 },
    ]);
  });

  it('calls setStoreData with decremented count on "-" click', () => {
    const { setStoreData } = renderCard({ count: 2 });

    fireEvent.click(screen.getAllByText("-")[0]);

    expect(setStoreData).toHaveBeenCalledTimes(1);
    const arg = setStoreData.mock.calls[0][0];
    expect(arg).toEqual([
      { id: 1, name: "Test Product", shortDescription: "A great product", price: 49.99, image: "/test.png", count: 1 },
    ]);
  });

  it('does not decrement below 0 on "-" click', () => {
    const { setStoreData } = renderCard({ count: 0 });

    fireEvent.click(screen.getAllByText("-")[0]);

    const arg = setStoreData.mock.calls[0][0];
    expect(arg).toEqual([
      { id: 1, name: "Test Product", shortDescription: "A great product", price: 49.99, image: "/test.png", count: 0 },
    ]);
  });

  it("calls setStoreData with input value on change", () => {
    const { setStoreData } = renderCard({ count: 1 });

    const input = screen.getAllByRole("spinbutton")[0];
    fireEvent.change(input, { target: { value: "5" } });

    expect(setStoreData).toHaveBeenCalledTimes(1);
    const arg = setStoreData.mock.calls[0][0];
    expect(arg).toEqual([
      { id: 1, name: "Test Product", shortDescription: "A great product", price: 49.99, image: "/test.png", count: 5 },
    ]);
  });
});
