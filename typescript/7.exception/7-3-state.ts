{
  type FailState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | FailState;

  class NetworkClient {
    tryConnect(): ResultState {
      return { result: "fail", reason: "offline" };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login(): ResultState {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        const state = this.userService.login();
        if (state.result === "fail") {
          throw new Error(`로그인 실패이유: ${state.reason}`);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
