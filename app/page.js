import CallToAction from "@/components/CallToAction/CallToAction";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import GrowthSection from "@/components/Growth/Growth";
import HeroTwo from "@/components/Hero/HeroTwo";
import TopHero from "@/components/Hero/TopHero";
import Insights from "@/components/Insights/Insights";
import Navbar from "@/components/Navbar/Navbar";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      {/* <RedirectingHelper /> */}
      <div className="w-full overflow-x-hidden">
        <div className="relative w-full">
          <div className="pt-0 sm:pt-4 custom-container">
            <Navbar />
            <TopHero />
          </div>
          <div className="absolute top-[30%] sm:top-0 left-1/2 -translate-x-[10%] h-full w-[50%] -rotate-45 bg-blue-400 pointer-events-none rounded-full opacity-40 blur-[80px] -z-30"></div>
        </div>
        <GrowthSection />
        <HeroTwo />
      </div>
      <div className="w-full ">
        <Insights />
        <Testimonial />
        <FAQ />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
