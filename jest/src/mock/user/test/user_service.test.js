const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

describe("Login", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("로그인한다면", async () => {
    await userService.login("abc", "abc");
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("또다시 로그인 한다면", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");

    expect(login).toHaveBeenCalledTimes(1);
  });
});
