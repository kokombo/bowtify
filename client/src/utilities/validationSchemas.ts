import * as Yup from "yup";

const signupValidationSchema = Yup.object({
  firstName: Yup.string().required("The first name field is required."),
  lastName: Yup.string().required("The last name field is required."),
  email: Yup.string()
    .required("The email field is required.")
    .email("Enter a valid email address."),
  password: Yup.string()
    .required("The password field is required.")
    .min(8, "Password should be at least 8 characters."),
});

const signinValidationSchema = Yup.object({
  emailAddress: Yup.string()
    .required("The email field is required.")
    .email("Enter a valid email address."),
  password: Yup.string().required("The password field is required."),
});

export { signinValidationSchema, signupValidationSchema };
