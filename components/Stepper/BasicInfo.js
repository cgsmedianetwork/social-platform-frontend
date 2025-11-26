import CustomDropdown from "../Inputs/CustomDropdown";
import CustomInput from "../Inputs/CustomInput";

const BasicInfo = ({ setStep, currentStep }) => {
  const accountTypeOptions = [
    { label: "Individual", value: "individual" },
    { label: "Business", value: "business" },
  ];
  return (
    <div className="bg-[#F9FBFB] max-w-lg mx-auto my-10 p-5 px-7 rounded-3xl">
      <h2 className="text-2xl text-neutral-950 font-medium">Basic Info</h2>
      <form action="" className="mt-5 flex flex-col gap-5">
        <CustomInput
          label={"Name"}
          id={"name"}
          placeholder={"Enter your name"}
        />
        <CustomDropdown
          label={"Account type"}
          options={accountTypeOptions}
          placeholder={"Choose role selection"}
        />
        <CustomInput label={"Location"} placeholder={"Your location"} />
        <button
          type="button"
          onClick={() => setStep(currentStep + 1)}
          className="w-full py-3 bg-neutral-300 hover:bg-neutral-400 transition-all duration-300 rounded-md text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
