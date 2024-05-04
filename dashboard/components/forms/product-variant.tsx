import * as React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductVariantFormSchema } from "@/form-schemas/product-insert-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

// type interface
interface IProps {
  productPrice: string;
  stockQuantityUnit: string;
}

// component
export default function ProductVariantForm({
  productPrice,
  stockQuantityUnit,
}: IProps): React.ReactNode {
  // form instance
  const form = useForm<z.infer<typeof ProductVariantFormSchema>>({
    resolver: zodResolver(ProductVariantFormSchema),
    defaultValues: {
      name: "",
      images: [],
      price: "0",
      stock_quantity: 0,
    },
  });

  // form submit handler function
  const onSubmit = async (values: z.infer<typeof ProductVariantFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2.5"
      >
        {/* variant type */}
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel> Variant Name </FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SIZE"> Size </SelectItem>
                    <SelectItem value="COLOR"> Color </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />

        {/* variant name */}
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel> Variant Name </FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
