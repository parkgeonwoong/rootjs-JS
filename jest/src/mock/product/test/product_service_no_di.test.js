/**
 * 목적: ProductService 테스트 하기 위함
 * 의존된 것에 영향을 받지 않도록 해야한다 → 모든 의존성은 mock을 활용
 *
 * 즉 ProductClient가 어떤 데이터를 리턴하는지 mock함수를 만들어서 컨트롤함 → 실패에 관한 환경적인 요소에 영향을 받지 않음
 */

const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// [문제점] product_client의 비동기가 테스트가 되어 어떠한 문제가 발생한다면 실패하게 된다. → 의존하게 된다 → mock
jest.mock("../product_client"); // product_client모듈을 가짜(mock) 객체로 대체

describe("ProductService", () => {
  // [mock함수] client의 mock 비동기 배열객체
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "banana", available: false },
  ]);

  // jest.mock과 jest.fn 연결
  // mockImplementation메서드는 다른 모듈에서 생성된 모의 함수의 기본 구현을 정의해야 할 때 사용
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
