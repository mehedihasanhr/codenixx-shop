import z from "zod";

export const registerSchema = z.object({
  first_name: z.string({
    required_error: "First name is required.",
    invalid_type_error: "First name only content string",
  }),
  last_name: z.string({
    required_error: "Last name is required.",
    invalid_type_error: "Last name only content string",
  }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid Email." }),
  password: z.string({ required_error: "Password is required." }),
});
