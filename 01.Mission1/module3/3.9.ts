{
  // block starts
  /* Abstraction in OOP */

  /* Abstraction by using abstract */
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine.");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test() {
      console.log("Just testing");
    }
  }

  const toyotaCar = new Car1();
  console.log(toyotaCar.startEngine());

  /* Abstraction by using abstract class */
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class HondaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }

  const hondaCar = new HondaCar();
  console.log(hondaCar.stopEngine());

  // block ends
}
