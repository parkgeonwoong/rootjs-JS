{
  class File {
    #file: string;
    constructor(file: string) {
      this.#file = file;
      this.run();
    }

    run() {
      try {
        console.log(this.#read(this.#file));
      } catch (err) {
        console.log(err.message);
        return; // 에러발생시 리턴하는 경우 finally는 실행이 된다
      } finally {
        this.#close();
        console.log("파일을 닫습니다.");
      }
    }

    #read(file: string) {
      if (file === "not") {
        throw new Error("파일이 없습니다.");
      }
      return "파일 내용";
    }

    #close() {}
  }

  new File("not");
}
