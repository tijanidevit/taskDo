import * as yup from "yup";

export const taskValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .matches(/^[a-zA-Z ]*$/, "Title must contain only alphabets"),
  description: yup
    .string()
    .required("Description is required")
    .matches(/^[a-zA-Z0-9-,. ]*$/, "Invalid characters"),
});
