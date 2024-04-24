import z from "zod";

export const generalAccountEditFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid Email." }),
  first_name: z.string({ required_error: "Name Require" }),
  last_name: z.string({ required_error: "Name Require" }),
  phone: z.string({ required_error: "Phone number required" }),
});
