"use client";
import { cn } from "@/lib/utils";
import { useSignUpInitMutation } from "@/Redux/Features/Auth/AuthApiSlice";
import { setTime } from "@/Redux/Features/Auth/AuthHelperSlice";
import { SignupSchema } from "@/Schema/SignupSchema";
import { session } from "@/utils/SessionHelper";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import CustomCheckbox from "../Inputs/CustomCheckbox";
import CustomInput from "../Inputs/CustomInput";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { Spinner } from "../ui/spinner";

const SignupForms = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signUpInit, { isLoading }] = useSignUpInitMutation();
  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      terms: false,
    },
  });
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const result = await signUpInit(data).unwrap();
      // console.log("result", result);
      // console.log("result?.data?.sendOTP", result?.data?.sendOTP);
      // set Session
      if (result?.data?.sendOTP) {
        // sessionStorage.setItem("signupInit", result?.data?.sessionId);
        session.set("signupInit", result?.data?.sessionId);
        toast.success("OTP sent to your phone number!");
        dispatch(
          setTime({
            sessionId: result?.data?.sessionId,
            time: result?.data?.time,
            prevSend: result?.data?.prevSend,
          }),
        );
        router.push("/verify");
      } else {
        toast.error("Failed to create account. Try again!");
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "Failed to create account. Try again!",
      );
    }
  };
  return (
    <div className="sm:max-w-[420px]  w-full  p-5 bg-neutral-50 rounded-2xl mx-3 md:mx-0">
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
              <FormItem className={"flex flex-col gap-1"}>
                <CustomInput
                  type={"text"}
                  placeholder={"jondoe@gmail.com"}
                  label={"Email"}
                  // required={true}
                  {...field}
                />
                <FormMessage className={cn("ml-1 text-xs")} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className={"flex flex-col gap-1"}>
                <CustomInput
                  type={"text"}
                  placeholder={"Enter phone number"}
                  label={"Phone number"}
                  required={true}
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
                  required={true}
                  {...field}
                />
                <FormMessage className={cn("ml-1 text-xs")} />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex gap-0.5">
                  <CustomCheckbox id={"terms"} field={field} />
                  <label
                    htmlFor="terms"
                    className="text-xs sm:text-sm mt-1 text-neutral-500 flex-1"
                  >
                    Please exclude me from any future emails regarding Triosale
                    and related Intuit product and feature updates, marketing
                    best practices, and promotions.
                  </label>
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            className="bg-brand-500 py-3 rounded-md text-neutral-950 font-semibold cursor-pointer"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-3 ">
                <Spinner /> Registering...
              </span>
            ) : (
              "Register"
            )}
          </button>
          <p className="text-sm text-neutral-500 text-center font-semibold">
            Already have an account?{" "}
            <Link href="/login" className="text-brand-700">
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignupForms;
