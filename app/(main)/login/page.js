import Analytics4 from "@/Assets/svgs/Analytics4";
import Analytics5 from "@/Assets/svgs/Analytics5";
import LoginForms from "@/components/Forms/LoginForms";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex relative size-full items-center justify-end overflow-hidden p-20">
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
            "[mask-image:linear-gradient(to_bottom_right,white,transparent)]",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-50"></div>
        <div className="z-20 relative ">
          <div className="min-w-[500px]">
            <Analytics4 />
          </div>
          <div className="absolute top-[5%] right-[-15%] translate-y-1/2 max-w-[250px]">
            {" "}
            <Analytics5 />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center p-4">
        <LoginForms />
      </div>
    </div>
  );
};

export default LoginPage;
