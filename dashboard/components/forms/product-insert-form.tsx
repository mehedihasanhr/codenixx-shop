"use client";

import { productInsertFormSchema } from "@/form-schemas/product-insert-form";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ProductCategoriesSelect from "./product-categories-select";

export default function ProductInsertForm() {
  const form = useForm<z.infer<typeof productInsertFormSchema>>({
    resolver: zodResolver(productInsertFormSchema),
    defaultValues: {
      name: "",
      handler: "",
      price: "",
      currency_code: "USD",
      images: [],
      category_ids: [],
      descriptions: "",
    },
  });

  // handle submission
  const onSubmit = async (values: z.infer<typeof productInsertFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-6"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Write product name"
                  onChange={(e) => {
                    field.onChange(e);

                    // generate handler
                    const handler = _.replace(
                      _.lowerCase(e.target.value),
                      /\s+/g,
                      "_"
                    );

                    form.setValue("handler", handler);
                  }}
                  value={field.value}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="handler"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Product Handler</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Write product handler"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="col-span-6">
          <FormLabel>Categories</FormLabel>
          <ProductCategoriesSelect form={form} />
        </div>

        <div className="col-span-6">
          <FormLabel>Categories</FormLabel>
          <ProductCategoriesSelect form={form} />
        </div>
      </form>
    </Form>
  );
}
