import { AccordionData } from "@/Assets/data/AccordionData";
import { cn } from "@/lib/utils";
import Header from "../Header/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="custom-container">
        <Header
          title={"Frequently Asked Questions"}
          titleClass={"text-center mx-auto"}
        />
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-0.5 mt-16"
          defaultValue="1"
        >
          {AccordionData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              defaultValue="1"
              className={cn("bg-white border-b-0 rounded-2xl px-16 py-8 ")}
            >
              <AccordionTrigger className="hover:no-underline cursor-pointer items-center gap-4">
                <div className="flex items-center gap-12">
                  <p className="text-neutral-300 text-5xl font-medium">
                    {item.id.toString().padStart(2, "0")}
                  </p>
                  <p className="text-neutral-600 text-3xl font-medium">
                    {item.question}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="">
                <p className="text-lg text-neutral-500 pl-28 pr-10">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
