{
  // 타입을 반복하고 싶지 않은 경우 또는 유형이 다른 유형을 기반으로 해야할 때.
  // 매핑된 유형은 미리 선언되지 않은 속성 유형을 선언하는 데 사용되는 인덱스 서명 구문을 기반으로 구축됩니다.

  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  const vi: Readonly<Video> = { title: "hi", author: "woong" };
  // vi.title = 'hello'
}
