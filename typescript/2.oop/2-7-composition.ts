{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error("커피 콩은 0개보다 커야해요!");
      this.coffeeBeans += beans;
    }

    grindBeans(shots: number) {
      console.log(`커피 콩 갈고있음... ${shots}샷`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피 콩이 충분하지 않아요!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat() {
      console.log("데우는 중...");
    }

    clean() {
      console.log("기계 청소 중...");
    }

    extract(shots: number): CoffeeCup {
      console.log(`커피 추출 중... ${shots}샷`);
      return { shots, hasMilk: false };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // Milk
  class cheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("우유 스팀 중...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }
  class fancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("고급 우유 스팀 중...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }
  class coldMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("고급 우유 스팀 중...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Sugar
  class candySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("설탕을 가져옵니다.");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("진짜 설탕을 가져옵니다.");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Milk
  const cheapMilkMaker = new cheapMilkSteamer();
  const fancyMilkMaker = new fancyMilkSteamer();
  const coldMilkMaker = new coldMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new candySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
