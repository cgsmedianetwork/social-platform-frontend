"use client";
import { YoutubeIcon } from "lucide-react";

const ConnectYoutube = () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const onClick = async () => {
    // console.log("clicked");
    try {
      const response = await fetch(
        `${backendUrl}/api/v1/social-connection/youtube/connect`
      );
      const data = await response.json();
      console.log(data);
      window.location.href = data?.url;
    } catch (error) {
      console.log(error);
      //   toast.error("Error connecting to Youtube");
    }
  };
  return (
    <div
      className="cursor-pointer p-3 border border-slate-600 rounded-md w-fit"
      onClick={onClick}
    >
      <YoutubeIcon className="text-red-500" />
    </div>
  );
};

export default ConnectYoutube;
