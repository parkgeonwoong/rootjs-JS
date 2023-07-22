/**
 * [옵저버 패턴]
 * 주체가 어떤 객체의 상태 변화를 관찰하다가 상태 변화가 있을 때마다 메서드 등을 통해
 * 옵저버 목록에 있는 옵저버들에게 변화를 알려주는 디자인 패턴
 *
 * - 프록시 객체를 통해서 구현
 */

function createReactiveObject(target, callback) {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      if (value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        callback(`${prop}가 ${prev} -> ${value}로 변경`);
      }
      return true;
    },
  });
  return proxy;
}

const a = {
  woong: "솔로",
};

const b = createReactiveObject(a, console.log);
b.woong = "솔로";
b.woong = "커플";
