import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImage from "../../Assets/images/hero image.png";

const TopHero = () => {
  return (
    <section className="py-20  grid grid-cols-2 gap-10 items-center px-4">
      <div className="">
        <h2 className="text-neutral-950 text-6xl font-bold leading-16">
          Secure Smarter. <br />
          Insights & Experts
        </h2>
        <p className="text-neutral-500 text-base font-medium mt-8">
          Connect your profiles, track what matters, and get personal advice to
          boost reach, engagement, and followers.
        </p>
        <button className="bg-brand-500 text-sm font-semibold text-neutral-950 px-4 py-3 rounded-md flex items-center gap-1 mt-7">
          Try it Free <ArrowRight size={18} />
        </button>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="hero image"
          className="border-2 border-neutral-500 rounded-xl"
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default TopHero;
