import * as Yup from "yup";

export const signUp = Yup.object({
  fName: Yup.string().min(3).max(15).required("Please enter your first name"),
  lName: Yup.string().min(3).max(15).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter valid email address"),
  password: Yup.string().min(8).required("Please enter your password"),
  gender: Yup.string().required("Please enter your gender"),
});
