import Joi from "joi";
// Creating a schema validation using Joi.
const joiUserNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .trim()
    .pattern(/^[A-Z][a-z]*$/, { name: "capitalized" })
    .messages({
      "any.required": "First name is required.",
      "string.max": "firstName can't be more than 20 characters",
      "string.pattern.base": "{#label} should start with a capital letter",
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .required()
    .trim()
    .pattern(/^[A-Za-z]+$/, { name: "letters" })
    .messages({
      "any.required": "Last name is required.",
      "string.pattern.base": "{#label} should contain only letters",
    }),
});

// Joi schema for guardian
const joiGuardianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Joi schema for localGuardian
const joiLocalGuardianSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Joi schema for student
const joiStudentSchema = Joi.object({
  id: Joi.string().required(),
  name: joiUserNameSchema.required().messages({
    "any.required": "Name is required.",
  }),
  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.required": "Gender is required",
    "any.only": "{#label} must be one of [male, female, other]",
  }),
  dateOfBirth: Joi.string().allow(""),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.email": "{#label} must be a valid email",
  }),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    "A",
    "B",
    "AB",
    "O",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-"
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: joiGuardianSchema.required(),
  localGuardian: joiLocalGuardianSchema.required(),
  profileImg: Joi.string().required(),
  isActive: Joi.string().valid("active", "block").default("active"),
});

export default joiStudentSchema;
