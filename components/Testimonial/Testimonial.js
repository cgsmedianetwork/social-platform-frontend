import Header from "../Header/Header";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div id="testimonial" className="w-full custom-container py-14 sm:py-24 ">
      <Header
        title={"Loved by people who just wanted Real help"}
        description={
          "From small businesses to personal pages, people trust our platform to help them grow without the hassle."
        }
        titleClass={
          "text-center text-3xl sm:text-5xl max-w-[800px] mx-auto sm:leading-14"
        }
        descriptionClass={"max-w-2xl text-center mx-auto text-base sm:text-lg"}
      />
      <div className="px-10 sm:px-12 mt-10">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
