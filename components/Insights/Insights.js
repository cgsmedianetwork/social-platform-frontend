import Analytics1 from "@/Assets/svgs/Analytics";
import Analytics2 from "@/Assets/svgs/Analytics2";
import Analytics3 from "@/Assets/svgs/Analytics3";
import { cn } from "@/lib/utils";
import Header from "../Header/Header";
import { GridPattern } from "../ui/grid-pattern";

const Insights = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-[50%]  rotate-12 bg-blue-400 pointer-events-none rounded-full opacity-40 blur-[80px] -z-20"></div>
      <div className=" relative py-36">
        <GridPattern
          x={-10}
          y={-10}
          width={60}
          height={60}
          squares={[
            [1, 4],
            [5, 0],
            [11, 0],
            [9, 1],
            [7, 2],
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-30 "
          )}
        />

        <div className="flex items-center gap-8 custom-container">
          <div className="w-[40%] ">
            <Header
              title={"Your Insights — All in One Clean, Easy View"}
              description={
                "Track your progress without the overwhelm. See how your posts are doing, what’s growing, and where to focus next."
              }
              titleClass={"text-left text-5xl leading-14"}
              descriptionClass={"text-left mt-4 text-lg"}
            />
          </div>
          <div className="flex-1 flex scale-105">
            <div className="w-2/5">
              <Analytics1 />
            </div>
            <div className="flex-1">
              <Analytics2 style={{ marginLeft: "-16px" }} />
              <div className="w-4/5">
                <Analytics3 className={"-mt-4"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
