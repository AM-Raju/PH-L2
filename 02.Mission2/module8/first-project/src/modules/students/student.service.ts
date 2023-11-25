import { TStudent } from "./student.interface";
import { Student } from "./student.schema";

const createStudentIntoDB = async (studentData: TStudent) => {
  // This is a built-in static method as StudentModel is a class.
  /*  const result = await StudentModel.create(student); */

  // This is built in instance method
  // We changed the model name frm StudentModel to Student in 9.6 at 11:30

  // =============== block start: Custom instance method Module 9.6================
  /*   const student = new Student(studentData);
  if (await student.isUserExists(studentData.id)) { //.isUserExists is a custom instance method
    throw new Error("User already exist");
  }

  const result = await student.save(); // here .save() is built-in instance method. 

  return result;*/
  // =============== block end: Custom instance method ================

  // =============== block start: Custom static method Module 9.7================

  if (await Student.isUserExists(studentData.id)) {
    throw new Error("User already exist");
  }
  const result = await Student.create(studentData);

  return result;
  // =============== block end: Custom instance method ================
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
