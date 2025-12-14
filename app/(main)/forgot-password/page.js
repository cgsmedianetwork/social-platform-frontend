import CustomInput from "@/components/Inputs/CustomInput";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Key01Icon } from "hugeicons-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ForgotPasswordPage = () => {
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
            <Key01Icon size={24} strokeWidth={1.8} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center font-semibold text-neutral-950">
            {" "}
            Forgot password?
          </h2>
          <p className="text-neutral-500 text-center text-sm mt-2">
            No worries, we’ll send you reset instructions.
          </p>
        </div>
        <div>
          <CustomInput label={"Email"} placeholder={"Enter your email"} />
          <button className="w-full py-2.5 mt-5 rounded-lg text-sm font-medium bg-brand-500 cursor-pointer">
            Reset Password
          </button>
        </div>
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

export default ForgotPasswordPage;
