"use client";
import { cn } from "@/lib/utils";
import { LoginSchema } from "@/Schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import logo from "../../Assets/logo.webp";
import CustomCheckbox from "../Inputs/CustomCheckbox";
import CustomInput from "../Inputs/CustomInput";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";

const LoginForms = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-[420px] w-full p-5 bg-neutral-50 rounded-2xl">
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-24"
        />
      </div>
      <h1 className="text-3xl font-semibold mt-4">Log in</h1>
      <p className="mt-2 text-neutral-500 text-sm">
        Welcome back! Please enter your details.
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
              <FormItem className={"flex flex-col gap-1"}>
                <CustomInput
                  type={"text"}
                  placeholder={"jondoe@gmail.com"}
                  label={"Email"}
                  {...field}
                />
                <FormMessage className={cn("ml-1 text-xs")} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={"flex flex-col gap-1"}>
                <CustomInput
                  type={"password"}
                  placeholder={"Enter password"}
                  label={"Password"}
                  {...field}
                />
                <FormMessage className={cn("ml-1 text-xs")} />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex gap-0.5">
                  <CustomCheckbox id={"remember"} field={field} />
                  <label
                    htmlFor="remember"
                    className="text-sm mt-1 text-neutral-500 flex-1"
                  >
                    Remember me
                  </label>
                </FormItem>
              )}
            />
            <Link href={"/forgot-password"} className="text-xs text-brand-700">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-brand-500 py-3 rounded-md text-neutral-950 font-semibold cursor-pointer"
          >
            Login
          </button>
          <p className="text-sm text-neutral-500 text-center font-semibold">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-brand-700">
              Signup
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForms;
