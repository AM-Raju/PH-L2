import { Schema, model, connect } from "mongoose";
import { Guardian, LocalGuardian, Student, UserName } from "./student.interface";

// Subschema for name
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    maxlength: [20, "firstName can't be more than 20 characters"],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNamestr === value;
      },
      message: "{VAlUE} isn't in capitalized format",
    },
  },
  middleName: { type: String, trim: true },
  lastName: { type: String, required: [true, "Last name is required."], trim: true },
});

// Subschema for guardian
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// Subschema for localGuardian

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: userNameSchema, required: [true, "Name is required."] },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      /* message: "Gender field can be one of the following: 'male', 'female', and 'other'", */
      message: "{VALUE} is not valid",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: String,
  email: { type: String, required: [true, "Email is required."] },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A", "B", "AB", "O", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: { type: String, required: true },
  isActive: { type: String, enum: ["active", "block"], default: "active" },
});

// Creation of student model

export const StudentModel = model<Student>("Student", studentSchema);
