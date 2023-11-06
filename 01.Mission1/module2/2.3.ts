{
  // block starts
  /* Generic types */
  // const rollNumbers: number[] = [3, 7, 6];
  const rollNumbers: Array<number> = [3, 7, 6];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: Array<boolean> = [true, false, true];

  /* Making generic type dynamic */

  // type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;

  const rollNumbers1: GenericArray<number> = [3, 7, 6];

  const mentors1: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const boolArray1: GenericArray<boolean> = [true, false, true];

  // Writing array of object using dynamic generic type

  type User = {
    name: string;
    age: number;
  };

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Mezba", age: 50 },
    {
      name: "Jankar Mahbub",
      age: 110,
    },
  ];

  // Generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Raju", email: "a@gmail.com" },
  ];

  // block ends
}
