"use client";

import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductInsertFormSchema } from "@/form-schemas/product-insert-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import ProductDescriptionEditor from "./description";

export default function ProductInsertForm() {
  const [variants, setVariants] = React.useState<
    { type: string; values: string[] }[]
  >([]);

  const form = useForm<z.infer<typeof ProductInsertFormSchema>>({
    resolver: zodResolver(ProductInsertFormSchema),
    defaultValues: {
      name: "",
      handler: "",
      price: "",
      currencyCode: "USD",
      brand: "",
      images: [],
      categoryIds: [],
      description: "",
    },
  });

  // handle submission
  const onSubmit = async (values: z.infer<typeof ProductInsertFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6">
        {/* main form */}
        <div className="flex-1 flex flex-col gap-6">
          {/* basic information  */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                General Information
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {/* name */}
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        {...field}
                        placeholder="Product name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* product description */}
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <ProductDescriptionEditor
                        defaultValue={
                          field.value !== undefined && field.value !== ""
                            ? JSON.parse(field.value)
                            : undefined
                        }
                        onChange={(value: string) => {
                          form.setValue("description", value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        {/* additional information */}
        <div className="w-72 h-screen"></div>
      </form>
    </Form>
  );
}
