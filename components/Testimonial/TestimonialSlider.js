import { TestimonialData } from "@/Assets/data/TestimonialData";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const TestimonialSlider = () => {
  return (
    <Carousel className="w-full ">
      <CarouselContent className={""}>
        {TestimonialData.map((testimonial, index) => (
          <CarouselItem key={index} className={cn("  mx-4")}>
            <div
              className={cn(
                "px-6 md:px-12 py-5 md:py-10 relative max-w-3xl mx-auto rounded-xl",
                testimonial.bg ? testimonial.bg : "bg-blue-100",
              )}
            >
              <div className="flex flex-col gap-2 md:gap-6 pl-24 sm:pl-28">
                <h2 className="text-neutral-600 text-xl sm:text-3xl font-semibold">
                  {testimonial.name}
                </h2>
                <p className="text-neutral-500 text-sm md:text-lg">
                  {testimonial.text}
                </p>
                <div className="flex flex-col-reverse sm:flex-row  gap-5 sm:items-center">
                  <div className="flex gap-2 sm:gap-5">
                    <LinkedinIcon size={20} className="text-neutral-500" />
                    <TwitterIcon size={20} className="text-neutral-500" />
                    <InstagramIcon size={20} className="text-neutral-500" />
                    <FacebookIcon size={20} className="text-neutral-500" />
                  </div>
                  <p className="text-neutral-500 text-sm font-semibold">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <div className="absolute top-14 -left-3 md:-left-14 z-40">
                <Image
                  src={testimonial.image}
                  alt="testimonial image"
                  className="w-28 h-40 md:w-44 md:h-56 object-cover rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"rounded-md"} size="small" />
      <CarouselNext className={"rounded-md"} />
    </Carousel>
  );
};

export default TestimonialSlider;
