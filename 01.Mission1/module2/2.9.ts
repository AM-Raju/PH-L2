{
  // block starts
  /* Conditional typing */

  //   type A1 = null;
  type A1 = number;
  type B1 = undefined;

  type X = A1 extends null ? true : false;
  // Here x is conditional type

  /* Nested conditional type */
  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;

  /* Example */

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type HasBike = CheckVehicle<"bike">;
  type HasTracktor = CheckVehicle<"Tracktor">;

  // block ends
}
