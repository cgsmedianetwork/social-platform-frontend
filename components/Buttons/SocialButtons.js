import { cn } from "@/lib/utils";
import {
  Facebook02Icon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "hugeicons-react";

export const FacebookButton = ({ handleFacebook, className }) => {
  return (
    <button
      onClick={handleFacebook}
      className={cn(
        "bg-blue-500 text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ",
        className
      )}
    >
      <Facebook02Icon size={20} strokeWidth={2} />
      Add Facebook Account
    </button>
  );
};

export const InstagramButton = ({ handleInstagram, className }) => {
  return (
    <button
      onClick={handleInstagram}
      className={cn(
        "bg-gradient-to-r from-[#A43A96] via-[#EF3423] to-[#FED523] text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2 ",
        className
      )}
    >
      <InstagramIcon size={20} strokeWidth={2} />
      Add Instagram Account
    </button>
  );
};

export const TiktokButton = ({ handleTiktok, className }) => {
  return (
    <button
      onClick={handleTiktok}
      className={cn(
        "bg-black text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-5",
        className
      )}
    >
      <TiktokIcon size={20} strokeWidth={2} />
      Add TikTok Account
    </button>
  );
};

//youtube
export const YoutubeButton = ({ handleYoutube, className }) => {
  return (
    <button
      onClick={handleYoutube}
      className={cn(
        "bg-[#F04438] text-white text-sm px-4 py-3 rounded-md flex items-center justify-center gap-2",
        className
      )}
    >
      <YoutubeIcon size={20} strokeWidth={2} />
      Add YouTube Account
    </button>
  );
};
