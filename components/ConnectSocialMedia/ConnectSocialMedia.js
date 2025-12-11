"use client";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/Assets/svgs/socialIcons";
import {
  useConnectFacebookMutation,
  useConnectYoutubeMutation,
} from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { MultiplicationSignIcon } from "hugeicons-react";
import Image from "next/image";
import account from "../../Assets/images/testimonial image.webp";
import {
  FacebookButton,
  InstagramButton,
  TiktokButton,
  YoutubeButton,
} from "../Buttons/SocialButtons";

const ConnectSocialMedia = () => {
  const [connectYoutube, { isLoading }] = useConnectYoutubeMutation();
  const [connectFacebook, { isLoading: isLoadingFacebook }] =
    useConnectFacebookMutation();
  const handleYoutube = async () => {
    try {
      const response = await connectYoutube({});
      console.log(response);
      if (response?.data?.url) {
        window.location.href = response?.data?.url;
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const handleFacebook = async () => {
    try {
      const response = await connectFacebook({});
      console.log(response);
      if (response?.data?.url) {
        window.location.href = response?.data?.url;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-neutral-900 text-center">
        Connect Your Social Accounts
      </h2>
      <p className="text-sm text-neutral-600 mt-1 text-center ">
        Build trust with your network by connecting your social profiles
      </p>
      <div className="flex flex-col gap-6 mt-5 mb-5 max-w-[500px] mx-auto">
        {/* facebook accounts  */}
        <div className="flex items-center justify-between gap-3">
          <FacebookButton
            handleFacebook={handleFacebook}
            className={"cursor-pointer"}
          />
          {/* accounts  */}
          <div className="flex items-center gap-2">
            <div className=" object-cover relative cursor-pointer group">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={account} alt="facebook" className="object-cover" />
              </div>
              {/* cross icon  */}
              <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                <MultiplicationSignIcon
                  className={"z-20"}
                  size={14}
                  strokeWidth={2}
                />
              </div>
              {/* facebook icon */}
              <FacebookIcon
                className={"z-20 absolute bottom-0 right-0"}
                width={16}
                height={16}
              />
            </div>
            <div className=" object-cover relative cursor-pointer group">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={account} alt="facebook" className="object-cover" />
              </div>
              {/* cross icon  */}
              <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                <MultiplicationSignIcon
                  className={"z-20"}
                  size={14}
                  strokeWidth={2}
                />
              </div>
              {/* facebook icon */}
              <FacebookIcon
                className={"z-20 absolute bottom-0 right-0"}
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        {/* youtube accounts  */}
        <div className="flex items-center justify-between gap-2 ">
          <YoutubeButton
            handleYoutube={handleYoutube}
            className={"cursor-pointer"}
          />
          <div className="flex items-center gap-2">
            <div className=" object-cover relative cursor-pointer group">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={account} alt="facebook" className="object-cover" />
              </div>
              {/* cross icon  */}
              <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                <MultiplicationSignIcon
                  className={"z-20"}
                  size={14}
                  strokeWidth={2}
                />
              </div>
              {/* facebook icon */}
              <div className="z-20 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <YoutubeIcon className={""} width={16} height={16} />
              </div>
            </div>
          </div>
        </div>
        {/* instagram accounts  */}
        <div className="flex items-center justify-between gap-3">
          <InstagramButton className={"cursor-pointer"} />
          <div className="flex items-center gap-2">
            <div className=" object-cover relative cursor-pointer group">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={account} alt="facebook" className="object-cover" />
              </div>
              {/* cross icon  */}
              <div className="absolute -top-1 -right-1 cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-full p-0.5 group-hover:block hidden">
                <MultiplicationSignIcon
                  className={"z-20"}
                  size={14}
                  strokeWidth={2}
                />
              </div>
              {/* facebook icon */}
              <div className="z-20 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <InstagramIcon className={""} width={16} height={16} />
              </div>
            </div>
          </div>
        </div>
        {/* tiktok accounts  */}
        <div className="flex items-center justify-between">
          <TiktokButton />
        </div>
      </div>
    </div>
  );
};

export default ConnectSocialMedia;
