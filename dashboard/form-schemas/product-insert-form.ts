import z from "zod";

export const productInsertFormSchema = z.object({
  name: z.string({ required_error: "Product name is required" }),
  handler: z.string({ required_error: "Product handler is required" }),
  price: z.string({ required_error: "Product price is required" }),
  currency_code: z.string({ required_error: "Currency is required" }),
  images: z.array(z.string()),
  category_ids: z.array(z.string()),
  descriptions: z.string().optional(),
});
