/* Object */
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Md.",
  middleName: "Aziz",
  lastName: "Morshed",
};

const instructor: {
  company: "Programming Hero"; // Literal types
  readonly firstName: string;
  middleName?: string; // Optional type
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "Jhanker",
  lastName: "Mahbub",
};
