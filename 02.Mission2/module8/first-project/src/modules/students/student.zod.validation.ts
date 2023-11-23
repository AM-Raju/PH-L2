import { z } from "zod";

const zodUserNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine(
      (value) => {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      { message: "First name isn't in capitalized format" }
    ),
  middleName: z.string(),
  lastName: z.string().min(1),
});

// Subschema for guardian
const zodGuardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Subschema for localGuardian
const zodLocalGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const zodStudentSchema = z.object({
  id: z.string(),
  name: zodUserNameSchema,
  gender: z.enum(["male", "female", "others"]),
  dateOfBirth: z.string().optional(),
  email: z.string().email("{VALUE} isn't email"),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(["A", "B", "AB", "O", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: zodGuardianSchema,
  localGuardian: zodLocalGuardianSchema,
  profileImg: z.string(),
  isActive: z.enum(["active", "block"]).default("active"),
});

export default zodStudentSchema;
