import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Header from "../Header/Header";
import { GridPattern } from "../ui/grid-pattern";

const CallToAction = () => {
  return (
    <section className="pb-28 bg-neutral-50 ">
      <div className="max-w-3xl mx-auto rounded-2xl p-10 relative ">
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
          ]}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent)] -z-0"
          )}
        />
        <div className="bg-brand-400/40 absolute inset-0 rounded-2xl"></div>
        <Header
          title={"Ready to Grow with Confidence?"}
          description={
            "Join a friendly platform where your social growth actually makes sense — and finally starts working."
          }
          className={"relative z-10 ]"}
          titleClass={"text-center leading-14"}
          descriptionClass={"text-center max-w-xl mx-auto mt-3"}
        />
        <div className="flex justify-center">
          <button className="bg-[#06F0FE] text-sm font-semibold text-neutral-950 px-4 py-3 rounded-md flex items-center gap-1 mt-7 z-30 cursor-pointer">
            Sign Up <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
