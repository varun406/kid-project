import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("please provide a name"),
  phone: yup.number().required("please provide a valid phone number"),
  email: yup.string().email().required("please provide a valid email address"),
  password: yup.string().min(8).required(),
});
