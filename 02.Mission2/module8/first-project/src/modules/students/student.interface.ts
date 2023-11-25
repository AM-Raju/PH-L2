import { Model } from "mongoose";

/* ============= Special Note ==============

1. We renamed the type with T at module 9.6. 

*/

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: "male" | "female" | "others";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A" | "B" | "AB" | "O" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: "active" | "block";
  isDeleted: boolean;
};

// =============== block start: Custom instance method Module 9.6================
/* // Creation of type of instance method for 9.6 module
export type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>; // null in 9.6 at 14:30
};

// Creation of a type of model for 9.6 module
export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;
 */
// =============== block end: Custom instance method ================

// =============== block start: Custom static method Module 9.7================
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// =============== block end: Custom instance method ================
