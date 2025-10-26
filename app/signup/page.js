import Analytics1 from "@/Assets/svgs/Analytics";
import Analytics2 from "@/Assets/svgs/Analytics2";
import Analytics3 from "@/Assets/svgs/Analytics3";
import SignupForms from "@/components/Forms/SignupForms";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const page = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className=" relative flex size-full items-center justify-end overflow-hidden p-10">
        <GridPattern
          x={-30}
          y={-30}
          width={50}
          height={50}
          squares={[
            [1, 4],
            [5, 1],
          ]}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent)]"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-50"></div>
        <div className="flex-1 flex scale-105 z-20 max-w-[700px]">
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
      <div className="w-full flex items-center justify-center">
        <SignupForms />
      </div>
    </div>
  );
};

export default page;
