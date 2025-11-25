"use client";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { GridPattern } from "@/components/ui/grid-pattern";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import {
  useResendSignUpOTPMutation,
  useVerifySignUpOTPMutation,
} from "@/Redux/Features/Auth/AuthApiSlice";
import { setTime } from "@/Redux/Features/Auth/AuthHelperSlice";
import { otpSchema } from "@/Schema/otpSchema";
import CountDown from "@/utils/CountDown";
import { session } from "@/utils/SessionHelper";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail01Icon } from "hugeicons-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const VerifyEmailPage = () => {
  const dispatch = useDispatch();
  const [isResend, setIsResend] = useState(false);
  const { sessionId, time, prevSend } = useSelector(
    (state) => state.authHelper
  );
  useEffect(() => {
    if (time > 0) {
      setIsResend(false); // start showing the timer again
    }
  }, [time]);

  const [resendSignUpOTP, { isLoading: isResendLoading }] =
    useResendSignUpOTPMutation();
  const [verifySignUpOTP, { isLoading: isVerifyLoading }] =
    useVerifySignUpOTPMutation();
  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otpCode: "",
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const sessionId = session.get("signupInit");
    const payload = { ...data, sessionId };
    // console.log(payload);
    try {
      const result = await verifySignUpOTP(payload).unwrap();
      console.log(result);
      if (result.success) {
        toast.success(result.message || "OTP verified successfully");
        form.reset();
      } else {
        toast.error(result.message || "Failed to verify OTP");
      }
    } catch (error) {
      toast.error(error.data.message || "Failed to verify OTP");
    }
  };

  const resendOTP = async () => {
    const sessionId = session.get("signupInit");
    const payload = { sessionId };
    const sendingToast = toast.loading("Sending OTP...");
    try {
      const result = await resendSignUpOTP(payload).unwrap();
      // console.log(result);

      if (result?.data?.sendOTP) {
        dispatch(
          setTime({
            sessionId: result?.data?.sessionId,
            time: result?.data?.time,
            prevSend: result?.data?.prevSend,
          })
        );
        toast.success("OTP resent successfully!", {
          id: sendingToast,
        });
      } else {
        toast.error("Failed to resend OTP!", {
          id: sendingToast,
        });
      }
    } catch (error) {
      toast.error("Failed to resend OTP!", {
        id: sendingToast,
      });
    }
  };
  return (
    <section className="relative overflow-hidden w-full min-h-screen flex items-center justify-center">
      <div className="absolute w-56 h-56 top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 pointer-events-none rounded-full blur-[100px]  opacity-40 z-10"></div>
      <GridPattern
        x={-10}
        y={-10}
        width={60}
        height={60}
        squares={[
          [5, 0],
          [3, 2],
          [11, 0],
          [9, 1],
          [12, 2],
          [15, 1],
          [17, 4],
        ]}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-30"
        )}
      />
      <h1 className="z-20 bg-white shadow-2xl p-8 rounded-2xl min-w-md flex flex-col gap-6">
        <div className="flex justify-center">
          <div className="border rounded-md p-3">
            <Mail01Icon size={24} strokeWidth={1.8} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-semibold text-neutral-950">
            {" "}
            Input the OTP code
          </h2>
          <p className="text-neutral-500 text-center text-sm mt-2">
            We sent a otp to your phone.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="otpCode"
              render={({ field }) => (
                <FormItem>
                  <InputOTP
                    maxLength={4}
                    // onChange={(value) => {
                    //   console.log(value);
                    // }}
                    containerClassName={cn("mx-auto flex justify-center w-fit")}
                    {...field}
                  >
                    <InputOTPGroup className={"gap-2"}>
                      <InputOTPSlot
                        index={0}
                        className={cn(
                          "w-20 h-20 !bg-transparent !rounded-l-xl rounded-r-xl border text-4xl"
                        )}
                      />
                      <InputOTPSlot
                        index={1}
                        className={cn(
                          "w-20 h-20 !bg-transparent !rounded-l-xl rounded-r-xl border text-4xl"
                        )}
                      />
                      <InputOTPSlot
                        index={2}
                        className={cn(
                          "w-20 h-20 !bg-transparent !rounded-l-xl rounded-r-xl border text-4xl"
                        )}
                      />
                      <InputOTPSlot
                        index={3}
                        className={cn(
                          "w-20 h-20 !bg-transparent !rounded-l-xl !rounded-r-xl border text-4xl"
                        )}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                  <FormMessage
                    className={cn("text-red-500 text-xs text-center")}
                  />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full py-2.5 mt-5 rounded-lg text-sm font-medium bg-brand-500 cursor-pointer"
            >
              {isVerifyLoading ? (
                <span className=" flex items-center justify-center gap-4">
                  <Spinner /> Verifying...
                </span>
              ) : (
                "Verify OTP"
              )}
            </button>
          </form>
        </Form>
        <p className="text-sm text-center">
          Didn&apos;t receive the code?{" "}
          {isResend || time <= 0 ? (
            <span
              onClick={() => resendOTP()}
              className="text-brand-700 cursor-pointer"
            >
              Click to resend
            </span>
          ) : (
            <CountDown
              durationInSeconds={time}
              onComplete={() => {
                setIsResend(true);
              }}
            />
          )}
        </p>
      </h1>
    </section>
  );
};

export default VerifyEmailPage;
