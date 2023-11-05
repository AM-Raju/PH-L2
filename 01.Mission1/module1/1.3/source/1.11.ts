{
  // Block starts
  /* Ternary Operator */
  // Normal if-else condition in TS
  const age: number = 30;
  if (age > 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  // Ternary condition in TS

  const isAdult = age > 18 ? "Adult" : "Not Adult";
  console.log(isAdult);

  /* nullish coalescing operator (??)*/
  const isAuthenticate = "";
  const result1 = isAuthenticate ?? "Guest";
  const result2 = isAuthenticate ? isAuthenticate : "Guest2";

  console.log(result1, result2);

  // Real example of nullish coalescing operator

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Raju",
    address: {
      city: "Jnd",
      road: "Awesome",
      presentAddress: "Jnd",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  // Block ends
}
