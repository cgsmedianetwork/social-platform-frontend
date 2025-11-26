import {
  Facebook02Icon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "hugeicons-react";

const ConnectPlatforms = ({ setStep, currentStep }) => {
  return (
    <div className="bg-[#F9FBFB] max-w-lg mx-auto my-10 p-5 px-7 rounded-3xl">
      <h2 className="text-2xl text-neutral-950 font-medium">
        Connect Your Social Platforms
      </h2>
      <form action="" className="mt-6 flex flex-col gap-8">
        <button className="bg-blue-500 text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ">
          <Facebook02Icon size={18} strokeWidth={2.5} />
          Sign in with Facebook
        </button>
        <button className="bg-gradient-to-r from-[#A43A96] via-[#EF3423] to-[#FED523] text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ">
          <InstagramIcon size={18} strokeWidth={2.5} />
          Sign in with Instagram
        </button>
        <button className="bg-black text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-5">
          <TiktokIcon size={18} strokeWidth={2.5} />
          Sign in with TikTok
        </button>
        <button className="bg-[#F04438] text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ">
          <YoutubeIcon size={18} strokeWidth={2.5} />
          Sign in with YouTube
        </button>
        <button
          type="button"
          onClick={() => setStep(currentStep + 1)}
          className="w-full py-3 bg-neutral-300 hover:bg-neutral-400 transition-all duration-300 rounded-md text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
        >
          Go to Dashboard
        </button>
      </form>
    </div>
  );
};

export default ConnectPlatforms;
