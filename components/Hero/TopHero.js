import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../Assets/images/hero image.png";

const TopHero = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center px-1 sm:px-4">
      <div className="max-w-2xl">
        <h2 className="text-neutral-950 text-4xl sm:text-5xl xl:text-6xl font-semibold sm:font-bold leading-tight xl:leading-16">
          Secure Smarter. <br />
          Insights & Experts
        </h2>
        <p className="text-neutral-500 text-base sm:text-lg font-medium mt-5 sm:mt-8">
          Connect your profiles, track what matters, and get personal advice to
          boost reach, engagement, and followers.
        </p>
        <div className="flex w-full">
          <Link
            href={"/login"}
            className="bg-brand-500 w-full sm:w-auto text-sm font-semibold text-neutral-950 px-4 py-3 rounded-md flex items-center justify-center gap-1 mt-7"
          >
            Try it Free <ArrowRight size={18} />
          </Link>
        </div>
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
