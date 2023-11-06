{
  // block starts

  /* Function with generics */
  const createArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resultGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };
  const resultGenericObj = createArrayWithGeneric<User>({
    id: 123,
    name: "Mr. X",
  });

  // Create a function that return tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resultTuple = createArrayWithTuple<string, number>("Bangladesh", 222);

  type User1 = { id: number; name: string };
  const resultTupleObj = createArrayWithTuple<string, User1>("BD", {
    id: 123,
    name: "Mr. X",
  });

  // Crate a function that return a object by attaching fixed value
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: "Mr. X", email: "x@gmail.com", devType: "NLWD" });
  const student2 = addCourseToStudent({ name: "Mr. Y", email: "Y@gmail.com", hasWatch: "Apple" });
  // block ends
}
