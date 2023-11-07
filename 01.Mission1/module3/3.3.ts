{
  // block starts
  // Implementation of type guard using typeof operator

  const add = (param1: string | number, param2: string | number): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, "3");
  console.log(result1);

  /* Implementation of "in" guard */
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log("I am normal user");
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Vai",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin Vy",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  // block ends
}
