{
  // Type / Interface 차이
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object: 둘 다 가능
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // class: 둘 다 가능
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends: 둘 다 가능
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // interface만 가능
  //   interface PositionInterface {
  //     z: number;
  //   }

  // Type 만 가능
  type Person = { name: string; age: number };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right"; // 유니온타입
}
