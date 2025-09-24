import CustomInput from "@/components/Inputs/CustomInput";

const page = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className="">
        <h1>image</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="max-w-96 border w-full p-5">
          <h1>Sign up</h1>
          <CustomInput
            type={"text"}
            placeholder={"Username"}
            label={"Username"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
