import SignupForms from "@/components/Forms/SignupForms";

const page = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className="border-r">
        <h1>image</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <SignupForms />
      </div>
    </div>
  );
};

export default page;
