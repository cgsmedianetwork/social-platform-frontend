import CustomDropdown from "../Inputs/CustomDropdown";
import CustomInput from "../Inputs/CustomInput";

const PersonalQuiz = ({ setStep, currentStep }) => {
  const contentPreferenceOptions = [
    { label: "Articles", value: "articles" },
    { label: "Videos", value: "videos" },
    { label: "Podcasts", value: "podcasts" },
    { label: "Newsletters", value: "newsletters" },
    { label: "Other", value: "other" },
  ];
  return (
    <div className="bg-[#F9FBFB] max-w-lg mx-auto my-10 p-5 px-7 rounded-3xl">
      <h2 className="text-2xl text-neutral-950 font-medium">Personal Quiz</h2>
      <form action="" className="mt-5 flex flex-col gap-5">
        <CustomInput
          label={"Primary Goal"}
          id={"primaryGoal"}
          placeholder={"Enter your goal"}
        />
        <CustomDropdown
          label={"Content Preference"}
          options={contentPreferenceOptions}
          placeholder={"Select content Preference"}
        />
        <CustomDropdown
          label={"Posting Frequency"}
          options={[
            { label: "Daily", value: "daily" },
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
          ]}
          placeholder={"Select posting frequency"}
        />
        <CustomDropdown
          label={"Business Category"}
          options={[
            { label: "Category 1", value: "category1" },
            { label: "Category 2", value: "category2" },
          ]}
          placeholder={"Select business category"}
        />
        <CustomDropdown
          label={"Style Personality"}
          options={[
            { label: "Personality 1", value: "personality1" },
            { label: "Personality 2", value: "personality2" },
          ]}
          placeholder={"Select personality"}
        />
        {/* btns  */}
        <div className="flex justify-between items-center">
          <p
            className="text-neutral-500 text-base font-semibold cursor-pointer"
            onClick={() => setStep(currentStep - 1)}
          >
            Back
          </p>
          <button
            type="button"
            onClick={() => setStep(currentStep + 1)}
            className="px-5 py-3 bg-neutral-300 hover:bg-neutral-400 transition-all duration-300 rounded-md text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalQuiz;
