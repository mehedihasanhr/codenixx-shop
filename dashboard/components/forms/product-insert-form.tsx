"use client";

import ProductCategoriesSelect from "@/components/forms/product-categories-select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { productInsertFormSchema } from "@/form-schemas/product-insert-form";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

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
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle className="text-base text-accent-foreground">
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-12 bg-white dark:bg-[#31363f] gap-4 rounded-xl">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12">
                  <FormLabel>Product Title</FormLabel>
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

            <div className="col-span-6 flex flex-col space-y-2">
              <FormLabel>Category</FormLabel>
              <ProductCategoriesSelect form={form} />
            </div>

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12">
                  <FormLabel>Business Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
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
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
