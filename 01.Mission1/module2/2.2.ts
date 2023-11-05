{
  // Block Start
  /* Interface */

  // Normal way to declare type in TS
  type User1 = {
    name: string;
    age: number;
  };

  const user: User1 = {
    name: "Raju",
    age: 35,
  };

  // Using interface to declare types in TS
  interface User2 {
    name: string;
    age: number;
  }

  // using interface on variable
  const user2: User2 = {
    name: "Hashi",
    age: 35,
  };

  /* Type Alias Vs Interface */
  /* One-- You can use type alias on both primitive and object data.
  But interface can only use on object data. */

  // Two -- Type extending using type alias vs interface
  // Type extending by using intersection

  type ExtendType = User1 & { role: string };

  const user3: ExtendType = {
    name: "raju",
    age: 35,
    role: "Learner",
  };

  // Type extending by using interface

  interface ExtendTypeInterface extends User1 {
    role: string;
  }
  const user4: ExtendTypeInterface = {
    name: "Samad",
    age: 30,
    role: "Student",
  };

  /* Three -- You extend type alias to an interface type.
  Here in line 44-46 we extend the User1 type to 
  ExtendTypeInterface type. */

  /* Using Interface on array, function */
  /* As we know array and function are object in JS.
  So we can use interface on them. */
  // Normal array type
  type Roll1 = number[];

  // Interface on array
  interface Roll2 {
    [index: number]: number;
  }

  const arr: Roll2 = [1, 2, 3];

  // Interface on function

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };

  // block ends
}
