import CustomInput from "@/components/Inputs/CustomInput";
import { Checkbox } from "@/components/ui/checkbox";

const SettingsPage = () => {
  return (
    <div className="p-4 px-12 pb-20">
      <h1 className="text-xl font-semibold ">Settings</h1>
      <div className="mt-8 px-6 bg-white rounded-lg p-6">
        <h2 className="text-lg font-medium ">Send Badge</h2>
        <form action="" className="mt-4 w-full flex flex-col gap-3">
          <CustomInput
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            className={"sm:!w-1/2 !w-full "}
          />
          <div>
            <label
              htmlFor="permission"
              className="text-neutral-600 text-sm font-medium"
            >
              Select Badge
            </label>
            <div className="w-full sm:w-1/2 grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Silver Badge
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Gold Badge
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Platinum Badge
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="analytics_view" />
                <label
                  htmlFor="analytics_view"
                  className="text-neutral-600 text-sm font-medium cursor-pointer"
                >
                  Diamond Badge
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-brand-500 text-sm font-medium px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
