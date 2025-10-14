import LoginForms from "@/components/Forms/LoginForms";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className=" relative flex size-full items-center justify-center overflow-hidden p-20">
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
      </div>
      <div className="w-full flex items-center justify-center">
        <LoginForms />
      </div>
    </div>
  );
};

export default LoginPage;
