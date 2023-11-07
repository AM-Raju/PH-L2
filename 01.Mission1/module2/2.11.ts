{
  // block starts
  /* ==== Utility Types ===== */
  /* Pick utility type | time: 00:00 */
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  /* Omit utility type | time: 03:00 */
  type ContactInfo = Omit<Person, "name" | "age">;

  /* Require utility time: 04:15 */
  type PersonRequire = Required<Person>;

  /* Partial utility type: time: 05:30 */
  type PersonPartial = Partial<Person>;

  /* Readonly utility type | time: 06:00 */
  type PersonReadonly = Readonly<Person>;

  /* Record utility type | time: 08:15 */
  /* type MyObj = {
    a: string;
    b: string;
  }; */

  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
  const obj2: Record<string, unknown> = {};

  // block ends
}
