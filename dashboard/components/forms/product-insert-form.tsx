"use client";

import * as React from "react";

import ProductVariantForm from "@/components/forms/product-variant";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectTrigger,
} from "@/components/multi-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ProductInsertFormSchema } from "@/form-schemas/product-insert-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconPlus } from "@tabler/icons-react";
import _ from "lodash";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Input } from "../ui/input";
import VariantTable from "./variant-table";

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-6"
      >
        <div className="col-span-8 flex flex-col gap-6">
          <Card className="shadow-none border-border/50">
            <CardHeader>
              <CardTitle className="text-base text-accent-foreground">
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-12 bg-white dark:bg-[#31363f] gap-4 rounded-xl">
              {/* product name */}
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12">
                    <FormLabel>Business Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder="Write product name"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="col-span-6 shadow-none border-border/50">
            <CardHeader>
              <CardTitle className="text-base text-accent-foreground">
                Inventory
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-12 bg-white dark:bg-[#31363f] gap-4 rounded-xl">
              {/* Quantity */}
              <FormField
                name="quantity"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-4">
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        placeholder="Ex: 100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* SKU */}
              <FormField
                name="quantity"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-8">
                    <FormLabel>SKU(optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ex: COD-FF-PUB-23"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Selling type */}
          <Card className="col-span-6 shadow-none border-border/50">
            <CardHeader>
              <CardTitle className="text-base text-accent-foreground">
                Selling Type
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-12 bg-white dark:bg-[#31363f] gap-4 rounded-xl">
              <FormField
                name="sellingType"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1 col-span-12"
                      >
                        {_.map(
                          [
                            {
                              title: "In-store selling only",
                              value: "in-store selling only",
                            },
                            {
                              title: "Online selling only",
                              value: "online selling only",
                            },
                            {
                              title: "Available both in-store and online",
                              value: "available both in-store and online",
                            },
                          ],
                          (item) => (
                            <FormItem
                              key={item.value}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value={item.value}
                                    id={item.value}
                                  />
                                  <Label htmlFor={item.value}>
                                    {item.title}
                                  </Label>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )
                        )}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Variant */}
          <Card className="col-span-6 shadow-none border-border/50">
            <CardHeader className="flex items-center justify-between flex-row">
              <CardTitle className="text-base text-accent-foreground">
                Variant
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white dark:bg-[#31363f] rounded-xl flex flex-col space-y-4">
              {/* variant form */}
              <div className="flex flex-col space-y-3.5">
                {_.map(variants, (variant, index) => (
                  <ProductVariantForm
                    key={index}
                    defaultValue={variant}
                    index={index}
                    onSubmit={(value, index) => {
                      setVariants((prev) =>
                        prev.map((d, i) => (i === index ? value : d))
                      );
                    }}
                    remove={(index) => {
                      console.log("clicked");
                      const stateValue = variants;
                      stateValue.splice(index, 1);
                      console.log(stateValue);
                      setVariants(stateValue);
                    }}
                  />
                ))}

                {/* add new variant */}
                <Button
                  size="sm"
                  type="button"
                  variant="ghost"
                  className="w-fit text-primary hover:text-primary justify-start rounded-md"
                  onClick={() => {
                    setVariants((prev) => [
                      ...prev,
                      {
                        type: "",
                        values: [""],
                      },
                    ]);
                  }}
                >
                  <IconPlus size={15} />
                  <span>Add Variant</span>
                </Button>
              </div>

              {/* variant config */}
              <VariantTable data={variants} />
            </CardContent>
          </Card>
        </div>

        {/* Right side */}
        <div className="col-span-4">
          <div className="sticky top-0">
            {/* Right side */}
            <Card className="col-span-6 shadow-none border-border/50">
              <CardHeader>
                <CardTitle className="text-base text-accent-foreground">
                  Product Organization
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-white dark:bg-[#31363f] flex flex-col space-y-2.5 rounded-xl">
                {/* product category */}

                <FormField
                  name="categoryIds"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Collections</FormLabel>
                      <FormControl>
                        <MultiSelect
                          value={field.value}
                          onSelectChange={(values) => field.onChange(values)}
                        >
                          <div>
                            <MultiSelectTrigger>
                              Select collections
                            </MultiSelectTrigger>
                            <div>
                              {_.map(field.value, (item) => (
                                <span key={item}>{item}</span>
                              ))}
                            </div>
                          </div>
                          <MultiSelectContent>
                            <MultiSelectItem value="collection_1">
                              Collection 1
                            </MultiSelectItem>
                            <MultiSelectItem value="collection_2">
                              Collection 2
                            </MultiSelectItem>
                            <MultiSelectItem value="collection_3">
                              Collection 3
                            </MultiSelectItem>
                            <MultiSelectItem value="collection_4">
                              Collection 4
                            </MultiSelectItem>
                          </MultiSelectContent>
                        </MultiSelect>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* product type */}
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product type</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Brand  */}
                <FormField
                  name="brand"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-12">
                      <FormLabel>Brand</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {_.map(
                              [
                                { name: "Data Sphere", id: "dtsph001" },
                                { name: "Shop Flow", id: "shpflo002" },
                              ],
                              ({ id, name }) => (
                                <SelectItem key={id} value={id}>
                                  {name}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* collections */}
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Collections</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1"> Collection 1 </SelectItem>
                            <SelectItem value="2"> Collection 2 </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Categories */}
                <FormField
                  name="categoryIds"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Collections</FormLabel>
                      <FormControl>
                        <MultiSelect
                          value={field.value}
                          onSelectChange={(values) => field.onChange(values)}
                        >
                          <div>
                            <MultiSelectTrigger>
                              Select collections
                            </MultiSelectTrigger>
                            <div>
                              {_.map(field.value, (item) => (
                                <span key={item}>{item}</span>
                              ))}
                            </div>
                          </div>
                          <MultiSelectContent>
                            <MultiSelectItem value="collection_1">
                              Collection 1
                            </MultiSelectItem>
                            <MultiSelectItem value="collection_2">
                              Collection 2
                            </MultiSelectItem>
                            <MultiSelectItem value="collection_3">
                              Collection 3
                            </MultiSelectItem>
                            <MultiSelectItem value="collection_4">
                              Collection 4
                            </MultiSelectItem>
                          </MultiSelectContent>
                        </MultiSelect>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
