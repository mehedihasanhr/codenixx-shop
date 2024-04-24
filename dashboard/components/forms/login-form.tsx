"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/form-schemas/login-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { z } from "zod";
import { Button } from "../ui/button";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // handle submit
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email here" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Password */}

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password here" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* remember me */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox id="remember-me" />
              </FormControl>
              <FormLabel
                style={{ margin: 0 }}
                htmlFor="remember-me"
                className="m-0 p-0"
              >
                Remember me
              </FormLabel>
            </FormItem>
          )}
        />

        <Button size="sm" className="mt-2.5">
          Login
        </Button>
      </form>
    </Form>
  );
}
