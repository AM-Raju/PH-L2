{
  // block starts
  /* Constrains | In TS constraints means to force something */
  // Crate a function that return a object by attaching fixed value
  const addCourseToStudent = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 125,
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 254,
    name: "Mr. Y",
    email: "Y@gmail.com",
    hasWatch: "Apple",
  });

  /*   const student3 = addCourseToStudent({
    emni: "Emni",
  }); */
  // block ends
  // block ends
}
