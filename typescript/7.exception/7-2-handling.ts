{
  class NetworkClient {
    tryConnect(): void {
      throw new Error("네트워크 연결이 끊어졌습니다.");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // login에서 할줄 알았지만 별도의 처리할 기능을 삼기 어렵다.
      // app에서 유저에게 따로 처리할 기능을 제공할 수 있기 때문에 여기서 try-catch
      try {
        this.userService.login();
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
