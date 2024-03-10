import { object, string, bool } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default object({
  comment: string().required(),
  name: string().required(),
  email: string().email().required(),
  phone: string()
    .matches(phoneRegExp, { message: "Invalid phone number" })
    .optional(),
  save: bool().default(false),
});
