import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "../Header/Header";
import { GridPattern } from "../ui/grid-pattern";

const CallToAction = () => {
  return (
    <section className="pb-14 sm:pb-28 bg-neutral-50 px-3">
      <div className="max-w-4xl mx-auto rounded-2xl p-12 relative ">
        <GridPattern
          x={-30}
          y={-30}
          width={50}
          height={50}
          squares={[
            [1, 4],
            [5, 1],
            [10, 3],
            [13, 2],
            [2, 2],
          ]}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent)] -z-0",
          )}
        />
        <div className="bg-brand-400/40 absolute inset-0 rounded-2xl"></div>
        <Header
          title={"Ready to Grow with Confidence?"}
          description={
            "Join a friendly platform where your social growth actually makes sense — and finally starts working."
          }
          className={"relative z-10 ]"}
          titleClass={
            "text-center text-3xl sm:text-6xl md:leading-16 max-w-xl mx-auto"
          }
          descriptionClass={"text-center text-lg max-w-xl mx-auto mt-3"}
        />
        <div className="flex justify-center">
          <Link
            href={"/signup"}
            className="bg-[#06F0FE] text-sm font-semibold text-neutral-950 px-4 py-3 rounded-md flex items-center gap-1 mt-7 z-30 cursor-pointer"
          >
            Sign Up <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
