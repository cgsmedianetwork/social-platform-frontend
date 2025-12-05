"use client";
import { login } from "@/actions/Login";
import { cn } from "@/lib/utils";
import { setUser } from "@/Redux/Features/Auth/AuthSlice";
import { LoginSchema } from "@/Schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import logo from "../../Assets/logo.webp";
import CustomCheckbox from "../Inputs/CustomCheckbox";
import CustomInput from "../Inputs/CustomInput";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { Spinner } from "../ui/spinner";
const LoginForms = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token } = useSelector((state) => state.auth);
  console.log("user", user, token);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      phone: "",
      password: "",
      remember: false,
    },
  });
  const onSubmit = async (data) => {
    // console.log(data);
    setLoading(true);
    const response = await login({
      phone: data?.phone,
      password: data?.password,
    });
    // console.log("response", response);
    if (response?.success) {
      toast.success(response?.message || "Login successful!");
      dispatch(
        setUser({
          user: response?.data?.userData,
          token: response?.data?.token,
        })
      );
      setLoading(false);
      router.push("/");
    } else {
      toast.error(response?.message || "Login failed!");
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[420px] w-full p-5 bg-neutral-50 rounded-2xl">
      <div className="flex justify-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-24"
          />
        </Link>
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
            name="phone"
            render={({ field }) => (
              <FormItem className={"flex flex-col gap-1"}>
                <CustomInput
                  type={"number"}
                  placeholder={"018XXXXXXXXX"}
                  label={"Phone"}
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
                    className="text-sm mt-1 text-neutral-500 flex-1 cursor-pointer"
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
            {loading ? (
              <span className="flex items-center gap-2 justify-center">
                <Spinner /> Logging in...
              </span>
            ) : (
              "Login"
            )}
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
