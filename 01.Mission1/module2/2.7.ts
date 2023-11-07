{
  // block starts
  /* Generic constraints with keyof operator */
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // done manually
  type Owner2 = keyof Vehicle; // using keyof operator
  // it means keyof created an union type using the key properties of Vehicle.
  const person1: Owner2 = "bike";

  /* Using keyof operator inside a function */

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Raju",
    age: 25,
    address: "Jnd",
  };
  const result1 = getPropertyValue(user, "age");

  // block ends
}
