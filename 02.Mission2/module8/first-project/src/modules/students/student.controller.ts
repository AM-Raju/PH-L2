import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import zodStudentSchema from "./student.zod.validation";
// import joiStudentSchema from "./student.joi.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // With this commented code we validate inputted data using joi
    /*  const { error, value } = joiStudentSchema.validate(studentData);
    if (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong in joi",
        error: error.details,
      });
    } */

    // Here we validate inputted data using Zod.
    const zodParsedData = zodStudentSchema.parse(studentData);
    // will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(zodParsedData);
    // send response
    res.status(200).json({
      success: true,
      message: "Student is created successfully.",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Get all student data successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await StudentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Get single student by id successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await StudentServices.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
