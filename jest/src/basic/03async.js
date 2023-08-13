function fetchProduct(error) {
  if (error === "error") {
    return Promise.reject("network err");
  }
  return Promise.resolve({ item: "milk", price: 200 });
}

module.exports = fetchProduct;
