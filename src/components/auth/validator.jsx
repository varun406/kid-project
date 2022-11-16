import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Please provide a name"),
  phone: yup.number().min(10).required("Please provide a valid phone number"),
  email: yup.string().email().required("Please provide a valid email address"),
  password: yup.string().min(8).required("Please provide a valid password"),
  city: yup.string().required("Please provide a city"),
  message: yup.string().required("Please provide a message"),
});
