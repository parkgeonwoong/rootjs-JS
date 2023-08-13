const fetchProduct = require("../03async.js");

describe("Async", () => {
  // done Callback
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
      done();
    });
  });

  // return
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
    });
  });

  // async await
  it("async-return", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "milk", price: 200 });
  });

  // resolve
  it("resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: 200,
    });
  });

  // reject
  it("reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network err");
  });
});
