// JumpStrategy 인터페이스
class JumpStrategy {
  jump() {
    throw new Error("This method must be implemented by subclasses.");
  }
}

// 높게 점프하는 전략
class HighJumpStrategy extends JumpStrategy {
  jump() {
    console.log("높게 점프!");
  }
}

// 낮게 점프하는 전략
class LowJumpStrategy extends JumpStrategy {
  jump() {
    console.log("낮게 점프!");
  }
}

// 중간 높이로 점프하는 전략
class MediumJumpStrategy extends JumpStrategy {
  jump() {
    console.log("중간 높이로 점프!");
  }
}

// 캐릭터 클래스 생성
class Character {
  constructor(name, jumpStrategy) {
    this.name = name;
    this.jumpStrategy = jumpStrategy;
  }

  setJumpStrategy(jumpStrategy) {
    this.jumpStrategy = jumpStrategy;
  }

  performJump() {
    this.jumpStrategy.jump();
  }
}

// 캐릭터 인스턴스 생성
const mario = new Character("Mario", new HighJumpStrategy());
const luigi = new Character("Luigi", new LowJumpStrategy());

// 캐릭터의 점프 실행
mario.performJump(); // 출력: "높게 점프!"
luigi.performJump(); // 출력: "낮게 점프!"

// 캐릭터의 점프 전략 변경
mario.setJumpStrategy(new MediumJumpStrategy());
mario.performJump(); // 출력: "중간 높이로 점프!"
