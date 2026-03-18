import Image from "next/image";
import heroTwo from "../../Assets/images/hero_two.webp";
import Header from "../Header/Header";

const HeroTwo = () => {
  return (
    <div id="features" className="w-full bg-brand-950 py-14 sm:py-28 px-3">
      <div className="custom-container">
        <Header
          title={"Your Social Media, Finally Made Simple"}
          titleClass={"text-center text-white  font-semibold"}
        />
        <div className="grid direction-reverse grid-cols-1 sm:grid-cols-2 items-center gap-10 mt-12  ">
          <div className="w-full h-full">
            <Image
              src={heroTwo}
              alt="hero two"
              className="w-full h-full rounded-xl object-cover "
            />
          </div>
          <div className=" grid grid-cols-2 gap-8 ">
            <div className="flex flex-col gap-5 text-white ">
              <h3 className="text-xl sm:text-2xl font-medium ">
                All-in-One View
              </h3>
              <p className="text-neutral-200">
                See every platform in one dashboard
              </p>
            </div>
            <div className="flex flex-col gap-5 text-white ">
              <h3 className="text-xl sm:text-2xl font-medium ">
                Human Help, Not AI Bots
              </h3>
              <p className="text-neutral-200">
                Real experts give you tips that actually work
              </p>
            </div>
            <div className="flex flex-col gap-5 text-white ">
              <h3 className="text-xl sm:text-2xl font-medium ">
                Clear, Actionable Advice
              </h3>
              <p className="text-neutral-200">
                No buzzwords, just what to do next
              </p>
            </div>
            <div className="flex flex-col gap-5 text-white ">
              <h3 className="text-xl sm:text-2xl font-medium ">
                Works for Anyone
              </h3>
              <p className="text-neutral-200">
                Whether you&apos;re growing a business or building a personal
                brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
