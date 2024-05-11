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
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Currency } from "../../../lib/utils";
import PriceInput from "../../price-input";
import { Checkbox } from "../../ui/checkbox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../ui/hover-card";
import { Label } from "../../ui/label";
import ProductDescriptionEditor from "./description";
import ProductImageInput, { type FileWithPreview } from "./product-image";

export default function ProductInsertForm() {
  const [files, setFiles] = React.useState<FileWithPreview[]>([]);
  const [profit, setProfit] = React.useState("");
  const currency = new Currency("BDT");

  const form = useForm<z.infer<typeof ProductInsertFormSchema>>({
    resolver: zodResolver(ProductInsertFormSchema),
    defaultValues: {
      name: "",
      handler: "",
      price: "",
      comparePrice: "",
      tax: true,
      costPerItem: "",
      currencyCode: "BDT",
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

          {/* Product Images */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                Media
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-12 gap-5">
              <ProductImageInput
                className="col-span-4"
                files={files}
                onChange={setFiles}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-12 gap-5">
              {/* Price */}
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-4">
                    <FormLabel className="my-2">Price</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
                          {currency.getCurrencySymbol()}
                        </span>
                        <PriceInput
                          value={field.value}
                          onChange={field.onChange}
                          currencyCode={form.getValues("currencyCode")}
                          onBlur={(value) => form.setValue(field.name, value)}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Compare Price */}
              <FormField
                name="comparePrice"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-4">
                    <div className="my-2">
                      <div className="flex items-center space-x-2">
                        <FormLabel>Compare-at price</FormLabel>
                        <HoverCard openDelay={100}>
                          <HoverCardTrigger className="opacity-50 hover:cursor-pointer p-0 m-0">
                            <QuestionMarkCircledIcon />
                          </HoverCardTrigger>
                          <HoverCardContent className="text-muted-foreground text-xs tracking-wide">
                            To display a markdown, enter a value higher than
                            your price. Often shown with a strikethrough.
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
                          {currency.getCurrencySymbol()}
                        </span>
                        <PriceInput
                          value={field.value}
                          onChange={field.onChange}
                          currencyCode={form.getValues("currencyCode")}
                          onBlur={(value) => form.setValue(field.name, value)}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Include text */}
              <FormField
                name="tax"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12">
                    <FormControl>
                      <div className="flex items-center space-x-2.5">
                        <Checkbox id="tax" className="rounded-[4px]" />
                        <Label htmlFor="tax">Charge tax on this product</Label>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Include text */}
              <FormField
                name="costPerItem"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-4">
                    <div className="my-2">
                      <div className="flex items-center space-x-2">
                        <FormLabel>Cost per item</FormLabel>
                        <HoverCard openDelay={100}>
                          <HoverCardTrigger className="opacity-50 hover:cursor-pointer p-0 m-0">
                            <QuestionMarkCircledIcon />
                          </HoverCardTrigger>
                          <HoverCardContent className="text-muted-foreground text-xs tracking-wide">
                            {"Customers won't see this"}
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
                          {currency.getCurrencySymbol()}
                        </span>
                        <PriceInput
                          value={field.value}
                          onChange={field.onChange}
                          currencyCode={form.getValues("currencyCode")}
                          onBlur={(value) => form.setValue(field.name, value)}
                        />
                      </div>
                    </FormControl>
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
