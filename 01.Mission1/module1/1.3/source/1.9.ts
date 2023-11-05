{
  //Block start
  /* Type Alias */

  type StudentTyp = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: StudentTyp = {
    name: "Raju",
    age: 35,
    gender: "male",
    contactNo: "0154222",
    address: "Courtpara",
  };

  const student2: StudentTyp = {
    name: "Mir",
    age: 30,
    gender: "male",
    address: "Dhaka",
  };

  /* Type Alias on string type */
  type UserName = string;
  const user: UserName = "Raju";

  /* Type Alias on boolean type */
  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  /* Type Alias on function */

  type Add = (num1: number, x: number) => number;
  const add: Add = (num1, num2) => num1 + num1;
  // Block ends
}
