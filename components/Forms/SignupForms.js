"use client";
import { SignupSchema } from "@/Schema/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomCheckbox from "../Inputs/CustomCheckbox";
import CustomInput from "../Inputs/CustomInput";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";

const SignupForms = () => {
  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      terms: false,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-[420px]  w-full p-5 bg-neutral-50 rounded-2xl">
      <h1 className="text-3xl font-semibold">Signup</h1>
      <p className="mt-2 text-neutral-500 text-sm">
        Empower your experience, sign up for a free
      </p>
      <Form {...form}>
        <form
          className="mt-5 flex flex-col gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type={"text"}
                  placeholder={"jondoe@gmail.com"}
                  label={"Email"}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type={"text"}
                  placeholder={"Enter phone number"}
                  label={"Phone number"}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type={"password"}
                  placeholder={"Enter password"}
                  label={"Password"}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex gap-1">
                  <CustomCheckbox id={"terms"} field={field} />
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            className="bg-brand-500 py-3 rounded-md text-neutral-950 font-semibold"
          >
            Register
          </button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForms;
