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
    <Carousel className="w-full">
      <CarouselContent className={""}>
        {TestimonialData.map((testimonial, index) => (
          <CarouselItem key={index} className={cn(" pb-20")}>
            <div className="px-12 py-10 relative max-w-2xl mx-auto bg-blue-100 rounded-xl">
              <div className="flex flex-col gap-6 pl-28">
                <h2 className="text-neutral-600 text-3xl font-semibold">
                  {testimonial.name}
                </h2>
                <p className="text-neutral-500 text-lg">{testimonial.text}</p>
                <div className="flex gap-5 items-center">
                  <LinkedinIcon size={20} className="text-neutral-500" />
                  <TwitterIcon size={20} className="text-neutral-500" />
                  <InstagramIcon size={20} className="text-neutral-500" />
                  <FacebookIcon size={20} className="text-neutral-500" />
                  <p className="text-neutral-500 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <div className="absolute top-14 -left-14">
                <Image
                  src={testimonial.image}
                  alt="testimonial image"
                  className="w-44 h-56 object-cover rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"rounded-md"} />
      <CarouselNext className={"rounded-md"} />
    </Carousel>
  );
};

export default TestimonialSlider;
