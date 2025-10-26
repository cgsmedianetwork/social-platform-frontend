"use client";
import { GridPattern } from "@/components/ui/grid-pattern";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { Mail01Icon } from "hugeicons-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const VerifyEmailPage = () => {
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
            Check your email
          </h2>
          <p className="text-neutral-500 text-center text-sm mt-2">
            We sent a verification code to your email.
          </p>
        </div>
        <div>
          {/* <CustomInput label={"Email"} placeholder={"Enter your email"} /> */}
          <InputOTP
            maxLength={4}
            onChange={(value) => {
              console.log(value);
            }}
            containerClassName={cn("mx-auto flex justify-center w-fit")}
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
          <button className="w-full py-2.5 mt-5 rounded-lg text-sm font-medium bg-brand-500">
            Verify Email
          </button>
        </div>
        <p className="text-sm text-center">
          Didn&apos;t receive the code?{" "}
          <span className="text-brand-700">Click to resend</span>
        </p>
        <Link
          href={"/login"}
          className="text-sm flex items-center gap-1 text-neutral-500 mx-auto"
        >
          <ArrowLeft size={20} /> Back to login
        </Link>
      </h1>
    </section>
  );
};

export default VerifyEmailPage;
