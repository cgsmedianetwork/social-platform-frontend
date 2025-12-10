"use client";
import {
  useConnectFacebookMutation,
  useConnectYoutubeMutation,
} from "@/Redux/Features/Social-connection/Social-connectionApiSlice";
import { Trash2 } from "lucide-react";
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
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-neutral-900">
        Connect Account
      </h2>
      <p className="text-sm text-neutral-600 mt-1">
        Build trust with your network by connecting your social profiles
      </p>
      <div className="flex flex-col gap-4 mt-5 mb-5">
        <div className="flex items-center justify-between">
          <FacebookButton
            handleFacebook={handleFacebook}
            className={"cursor-pointer"}
          />
          <button className="text-sm px-3 py-1.5 flex items-center gap-1 border border-red-500 text-red-500 rounded-md font-semibold">
            <Trash2 size={16} /> Delete Link
          </button>
        </div>
        <div className="flex items-center justify-between">
          <InstagramButton />
          <button className="text-sm px-3 py-1.5 flex items-center gap-1 border border-red-500 text-red-500 rounded-md font-semibold">
            <Trash2 size={16} /> Delete Link
          </button>
        </div>
        <div className="flex items-center justify-between">
          <TiktokButton />
          <button className="text-sm px-3 py-1.5 flex items-center gap-1 border border-red-500 text-red-500 rounded-md font-semibold">
            <Trash2 size={16} /> Delete Link
          </button>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-neutral-900 mt-4">
            Other Profiles
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            Enter your profile link to add these social accounts to your profile
          </p>
          <div className="flex items-center gap-2 justify-between">
            <YoutubeButton
              handleYoutube={handleYoutube}
              className={"cursor-pointer"}
            />
            {/* <CustomInput placeholder={"Enter your link"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSocialMedia;
