"use client";
import { YoutubeIcon } from "lucide-react";

const ConnectYoutube = () => {
  const onClick = async () => {
    console.log("clicked");
    try {
      const response = await fetch(
        "http://localhost:4005/api/v1/social-connection/youtube/connect"
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
    <div className="flex items-center gap-2">
      <span className="cursor-pointer" onClick={onClick}>
        <YoutubeIcon className="text-red-500" />
      </span>
      connect youtube
    </div>
  );
};

export default ConnectYoutube;
