import { cn } from "@/lib/utils";

const Header = ({ title, description, titleClass, descriptionClass }) => {
  return (
    <header className="flex flex-col gap-2">
      <h3 className={cn("text-neutral-600 text-5xl font-semibold", titleClass)}>
        {title}
      </h3>
      <p
        className={cn(
          "text-base text-neutral-500 font-normal text-center",
          descriptionClass
        )}
      >
        {description}
      </p>
    </header>
  );
};

export default Header;
