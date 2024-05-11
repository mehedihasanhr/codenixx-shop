import z from "zod";

export const ProductInsertFormSchema = z.object({
  name: z.string({ required_error: "Product name is required" }),
  handler: z.string({ required_error: "Product handler is required" }),
  price: z.string({ required_error: "Product price is required" }),
  comparePrice: z.string().optional(),
  tax: z.boolean(),
  costPerItem: z.string().optional(),
  profit: z.string().optional(),
  currencyCode: z.string({ required_error: "Currency is required" }),
  images: z.array(z.string()),
  brand: z.string().optional(),
  categoryIds: z.array(z.string()),
  quantity: z.number(),
  sellingType: z.enum(
    [
      "in-store selling only",
      "online selling only",
      "available both in-store and online",
    ],
    {
      required_error: "You need to select a selling type.",
    }
  ),
  stock_quantity_unit: z.string(),
  description: z.string().optional(),
});

export const ProductVariantFormSchema = z.object({
  name: z.string({ required_error: "variant name is required" }),
  type: z.enum(["SIZE", "COLOR"], {
    required_error: "You need to select a variant option type",
  }),
  images: z.array(z.string()),
  price: z.string(),
  stock_quantity: z.number(),
  stock_quantity_unit: z.string(),
});
