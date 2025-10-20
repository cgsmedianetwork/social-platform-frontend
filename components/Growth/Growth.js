import ConnectIcon, {
  DashboardIcon,
  GuidanceIcon,
} from "@/Assets/svgs/SvgReact";
import Header from "../Header/Header";

const GrowthSection = () => {
  return (
    <section className="custom-container py-16 pb-28">
      <Header
        title={"Simple Steps to Smarter Growth"}
        titleClass={"text-center max-w-2xl mx-auto "}
        description={
          "We make it easy for anyone to understand and improve their social media: no fancy tools, no guesswork."
        }
        descriptionClass={"max-w-xl mt-2 mx-auto"}
      />
      <div className="grid grid-cols-3 gap-4 mt-12">
        <div className="bg-neutral-100/60 rounded-lg p-6 flex flex-col gap-5">
          <div className="bg-white shadow-2xl rounded-full p-4 mx-auto">
            <ConnectIcon width={35} height={35} />
          </div>
          <h2 className="text-neutral-600 text-2xl font-semibold text-center">
            Connect Your Profiles
          </h2>
          <p className="text-neutral-500 text- text-center">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
        </div>
        <div className="bg-neutral-100/60 rounded-lg p-6 flex flex-col gap-5">
          <div className="bg-white shadow-2xl rounded-full p-4 mx-auto">
            <DashboardIcon width={35} height={35} />
          </div>
          <h2 className="text-neutral-600 text-2xl font-semibold text-center">
            View Your Dashboard
          </h2>
          <p className="text-neutral-500 text- text-center">
            See easy-to-read insights on reach, likes, comments, followers, and
            more.
          </p>
        </div>
        <div className="bg-neutral-100/60 rounded-lg p-6 flex flex-col gap-5">
          <div className="bg-white shadow-2xl rounded-full p-4 mx-auto">
            <GuidanceIcon width={35} height={35} />
          </div>
          <h2 className="text-neutral-600 text-2xl font-semibold text-center">
            Get Expert Guidance
          </h2>
          <p className="text-neutral-500 text- text-center">
            Chat directly with a real social media expert who’ll help you grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
