import ConnectFacebook from "@/components/ConnectSocialPlatforms/ConnectFacebook";
import ConnectInstagram from "@/components/ConnectSocialPlatforms/ConnectInstagram";
import ConnectTiktok from "@/components/ConnectSocialPlatforms/ConnectTiktok";
import ConnectYoutube from "@/components/ConnectSocialPlatforms/ConnectYoutube";

export default function Home() {
  return (
    <div className="text-xl font-bold flex w-full h-screen justify-center items-center">
      <div>
        <div>Social Platform</div>
        <div className="flex gap-4 mt-5">
          <ConnectYoutube />
          <ConnectFacebook />
          <ConnectInstagram />
          <ConnectTiktok />
        </div>
      </div>
    </div>
  );
}
