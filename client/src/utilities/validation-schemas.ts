import * as Yup from "yup";

const signupValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("The first name field is required.")
    .matches(/^\S(.*\S)?$/, "First name is required"),
  lastName: Yup.string()
    .required("The last name field is required.")
    .matches(/^\S(.*\S)?$/, "Last name is required"),
  email: Yup.string()
    .required("The email field is required.")
    .email("Enter a valid email address."),
  password: Yup.string()
    .required("The password field is required.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "At least 8 characters, a letter, a number and a special character."
    ),
});

const signinValidationSchema = Yup.object({
  email: Yup.string()
    .required("The email field is required.")
    .email("Enter a valid email address."),
  password: Yup.string().required("The password field is required."),
});

export { signinValidationSchema, signupValidationSchema };
