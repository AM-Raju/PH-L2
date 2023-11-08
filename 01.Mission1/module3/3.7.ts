{
  // block starts

  /* Static on OOP */
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();

  /*  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment()); */

  // when you use static on method
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());

  const instance2 = new Counter();
  /*   console.log(instance2.increment());
  console.log(instance2.increment()); */

  // When you use static on method
  console.log(Counter.increment());
  console.log(Counter.increment());

  // block ends
}
