import ConnectYoutube from "@/components/ConnectYoutube/ConnectYoutube";

export default function Home() {
  return (
    <div className="text-xl font-bold flex w-full h-screen justify-center items-center">
      <div>
        <div>Social Platform</div>
        <ConnectYoutube />
      </div>
    </div>
  );
}
