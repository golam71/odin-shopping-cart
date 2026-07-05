import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("fetchData", () => {
  beforeEach(() => {
    vi.stubGlobal("alert", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns parsed JSON on successful fetch", async () => {
    const mockData = [{ id: 1, name: "Test" }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { default: fetchData } = await import("../src/products/fetchData.js");
    const result = await fetchData();
    expect(result).toEqual(mockData);
  });

  it("calls alert with error message when fetch throws", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network failure"));

    const { default: fetchData } = await import("../src/products/fetchData.js");
    await fetchData().catch(() => {});
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("Network failure"),
    );
  });

  it("calls alert with status code when response is not OK", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    const { default: fetchData } = await import("../src/products/fetchData.js");
    await fetchData().catch(() => {});
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("404"),
    );
  });
});
