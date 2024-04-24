"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generalAccountEditFormSchema } from "@/form-schemas/general-account-edit-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLock } from "@tabler/icons-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export default function GeneralAccountEditForm() {
  const form = useForm<z.infer<typeof generalAccountEditFormSchema>>({
    resolver: zodResolver(generalAccountEditFormSchema),
    defaultValues: {
      email: "mehedihasan.hr.324@gmail.com",
      first_name: "MD Mehedi",
      last_name: "Hasan",
      phone: "01518309205",
    },
  });

  // handle submit
  const onSubmit = (values: z.infer<typeof generalAccountEditFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-4"
      >
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-12 space-y-1">
              <FormLabel className="text-sm">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type="email" {...field} readOnly disabled />
                  <IconLock
                    size={20}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 opacity-30"
                  />
                </div>
              </FormControl>
              <FormDescription className="text-xs font-normal">
                {"Please "}
                <Link href="#" className="text-primary hover:underline">
                  contact the administrator
                </Link>
                {" to change your email."}
              </FormDescription>
            </FormItem>
          )}
        />

        {/* First name */}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem className="col-span-6 space-y-1">
              <FormLabel className="text-sm">First Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* last name */}
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem className="col-span-6 space-y-1">
              <FormLabel className="text-sm">Last Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Phone number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-6 space-y-1">
              <FormLabel className="text-sm">Phone number</FormLabel>
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
