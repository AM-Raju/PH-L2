import validator from "validator";
import { Schema, model, connect } from "mongoose";
import { TGuardian, TStudent, StudentModel, TUserName, TLocalGuardian } from "./student.interface";
import bcript from "bcrypt";
import config from "../../config";

// Subschema for name
const userNameSchema = new Schema<TUserName>({
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
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} isn't valid",
    },
  },
});

// Subschema for guardian
const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// Subschema for localGuardian

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

/* In 9.6 at 09:15 we put two other elements
in studentSchema. one is previously created 
StudentModel and StudentMethods */
// const studentSchema = new Schema<Student>({ // This previous code before 9.6
// const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({ // code for 9.6
// code for 9.7 line 64
const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: userNameSchema, required: [true, "Name is required."] },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "others"],
        /* message: "Gender field can be one of the following: 'male', 'female', and 'other'", */
        message: "{VALUE} is not valid",
      },
      required: [true, "Gender is required"],
    },
    dateOfBirth: String,
    email: {
      type: String,
      required: [true, "Email is required."],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "{VALUE} isn't email",
      },
    },
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
    isDeleted: { type: Boolean, default: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// ================== Block starts: middleware ==============

// DOCUMENT Middleware
// pre save / document middleware
studentSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hashing password in save into DB
  user.password = await bcript.hash(user.password, Number(config.dcript_salt_round));
  next();
});

// post save / document middleware
studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// QUERY Middleware
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// ================== Block end:  middleware ==============

// ================= block starts : Mongoose virtual ===================
studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});
// ================= block ends : Mongoose virtual =====================

// =============== block start: Custom instance method Module 9.6================

/* studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Creation of student model
// We changed the model name frm StudentModel to Student in 9.6 at 11:30
export const Student = model<TStudent, StudentModel>("Student", studentSchema); // Put StudentModel type in 9.6 at 15:15
 */
// =============== block end: Custom instance method Module 9.6================

// =============== block start: Custom static method Module 9.7================
// creating an custom static method

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>("Student", studentSchema);

// =============== block end: Custom static method Module 9.7================
