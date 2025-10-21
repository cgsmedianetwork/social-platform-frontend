import Header from "../Header/Header";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="w-full custom-container py-24 ">
      <Header
        title={"Loved by people who just wanted Real help"}
        description={
          "From small businesses to personal pages, people trust our platform to help them grow without the hassle."
        }
        titleClass={"text-center text-5xl max-w-[800px] mx-auto leading-14"}
        descriptionClass={"max-w-2xl text-center mx-auto"}
      />
      <div className="px-12 mt-14">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
