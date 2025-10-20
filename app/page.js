import GrowthSection from "@/components/Growth/Growth";
import TopHero from "@/components/Hero/TopHero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative w-full">
        <div className="pt-4 w-full custom-container">
          <Navbar />
          <TopHero />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-[10%] h-full w-[50%] -rotate-45 bg-blue-400 pointer-events-none rounded-full opacity-40 blur-[80px] -z-30"></div>
      </div>
      <GrowthSection />
    </div>
  );
}
